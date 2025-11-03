import React from "react";
import usePhoneBookStore from "../Store/PhoneBook";

const ContactList = () => {
  const { PhoneBook, filteredList } = usePhoneBookStore();
  console.log("list", PhoneBook);
  const listToRender = filteredList.length > 0 ? filteredList : PhoneBook;

  return (
    <div className="box">
      <div>
        {listToRender.map((item) => (
          <div key={item.id} className={PhoneBook.length > 0 ? "boxIn" : ""}>
            <p>이름 : {item.name}</p>
            <p>전화번호 : {item.phoneNum}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
