import React from "react";
import "../Search/Style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox p-2 w-[100%] h-[50px] relative rounded-[5px] bg-[#e5e5e5]">
      <input
        type="text"
        className="w-full bg-inherit h-[35px] p-2 text-[15px] focus:outline-none "
        placeholder="جستجو"
      />
      <Button className="!absolute !rounded-full top-[8px] z-50 !text-black left-[5px] w-[37px] !min-w-[37px] h-[37px] ">
        <IoSearch className="text-[#5d5c5c] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
