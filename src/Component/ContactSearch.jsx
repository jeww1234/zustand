import React from "react";
import { TextField, Box, Button } from "@mui/material";
import usePhoneBookStore from "../Store/PhoneBook";

const ContactSearch = () => {
  const { PhoneBook, searchName, setSearchName, setFilteredList } =
    usePhoneBookStore();
  console.log("sssss", searchName);

  const handleSearchName = () => {
  const filtered = PhoneBook.filter((item) =>
    item.name.toLowerCase().includes(searchName.toLowerCase())
  );
  setFilteredList(filtered);
};

const Enter = (e) =>{
  if(e.key === "Enter"){
    handleSearchName()
  }
}

  return (
    <Box display="flex" justifyContent="center" marginBottom="1rem">
      <TextField
        id="Search"
        label="이름"
        fullWidth
        onChange={(e) => setSearchName(e.target.value)}
        onKeyDown={(e)=>Enter(e)}
      />
      <Button variant="contained" onClick={handleSearchName}>
        검색
      </Button>
    </Box>
  );
};

export default ContactSearch;
