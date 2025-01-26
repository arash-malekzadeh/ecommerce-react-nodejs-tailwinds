import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images.png";
import Search from "../Search/Search";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%] font-[500]">
                <p className="text-[12px]">
                  "تا ۵۰٪ تخفیف برای استایل‌های فصل جدید، فقط برای مدت محدود"
                </p>
              </div>

              <div className="cols2 flex items-center justify-end">
                <ul className="flex items-center gap-2">
                  <li>
                    <Link
                      to="/help-center"
                      className="text-[12px] link font-[500] transition"
                    >
                      مرکز پشتیبانی
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/order-tracking"
                      className="text-[12px] link font-[500] transition"
                    >
                      پیگیری سفارش
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header border-b-[1px]">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[30%]">
              <Link to={"/"}>
                {" "}
                <img className="w-[300px]" src={logo} alt="nion" />
              </Link>
            </div>
            <div className="col2 w-[40%]">
              <Search />
            </div>
            <div className="col3 w-[30%]  flex items-center  pr-7">
              <ul className="w-[full] flex justify-end gap-3">
                <li className="list-none py-2 pl-20">
                  <Link to="/login" className="link transition">
                    ورود
                  </Link>
                  &nbsp; | &nbsp;
                  <Link to="/register" className="link transition">
                    ثبت نام
                  </Link>
                </li>
                <Tooltip title="سبد خرید شما">
                  <li className="list-none">
                    {" "}
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </li>
                </Tooltip>

                <li className="list-none">
                  {" "}
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </li>
                <li className="list-none">
                  {" "}
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
