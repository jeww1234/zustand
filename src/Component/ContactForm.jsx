import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import usePhoneBookStore from "../Store/PhoneBook";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const {addContact} = usePhoneBookStore()
  const handleAddContact =()=>{
    //연락처 저장 장소 ->  리스트 PhoneBook
    //연락처 추가
    if(!name.trim() || !phoneNum.trim()) return

    addContact(name, phoneNum)
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="start" gap={2}>
      <TextField
        id="Name"
        label="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth

      />
      <TextField
        id="PhoneNum"
        label="전화번호"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
        fullWidth

      />
      <Button variant="contained" onClick={handleAddContact}>추가</Button>
    </Box>
  );
};

export default ContactForm;
