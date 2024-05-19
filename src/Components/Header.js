import React, { useState } from "react";
import Search from "./Search";

const Header = () => {

  const [data ,SetData]= useState("")

  const search = (e) => {
    const value = e.target.value;
    let inputValues = data;
    inputValues = value;
    SetData(inputValues);
    
    // onChange(text);        
}
  return (
    <>
      <div className="header">
       <h3 className="header-text">Contact List</h3>
        </div>
    </>
  );
};

export default Header;
