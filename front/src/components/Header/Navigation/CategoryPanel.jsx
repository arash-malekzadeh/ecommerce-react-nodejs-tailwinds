import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import "./Navigation.css";
import { IoClose } from "react-icons/io5";
import { FaRegMinusSquare } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.SetisOpenCatPanel(newOpen);
  };
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innersubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  const DrawerList = (
    <Box
      className="categoryPanel"
      sx={{ width: 250, direction: "rtl" }}
      role="presentation"
    >
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        خرید براساس دسته بندی{" "}
        <IoClose
          className="text-[20px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex flex-col items-center relative">
            <Link to="/" className="w-full">
              <Button className="!text-right !text-[rgba(0,0,0,0.7)] px-3  !justify-start w-full">
                مد روز
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegMinusSquare
                onClick={() => openSubmenu(1)}
                className="absolute top-[10px] left-[15px] cursor-pointer"
              />
            ) : (
              <FaRegPlusSquare
                onClick={() => openSubmenu(1)}
                className="absolute top-[10px] left-[15px] cursor-pointer"
              />
            )}
            {submenuIndex === 1 && (
              <ul className="submenu  w-full  pr-3 ">
                <li className="mb-1 list-none relative">
                  <Link to="">
                    <Button className="!text-right !text-[rgba(0,0,0,0.7)] px-3  !justify-start w-full">
                      پوشیدنی
                    </Button>
                  </Link>

                  {innersubmenuIndex === 1 ? (
                    <FaRegMinusSquare
                      onClick={() => openInnerSubmenu(1)}
                      className="absolute top-[10px] left-[15px] cursor-pointer"
                    />
                  ) : (
                    <FaRegPlusSquare
                      onClick={() => openInnerSubmenu(1)}
                      className="absolute top-[10px] left-[15px] cursor-pointer"
                    />
                  )}
                  {innersubmenuIndex == 1 && (
                    <ul className="inner_submenu  w-full  pr-3 ">
                      <li className="mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          تیشرت شنل دار
                        </Link>
                      </li>
                      <li className="mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          ساعت هوشمند
                        </Link>
                      </li>
                      <li className=" mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          دستبندهای الماس
                        </Link>
                      </li>
                      <li className=" mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          کاور تبلت
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex flex-col items-center relative">
            <Link to="/" className="w-full">
              <Button className="!text-right !text-[rgba(0,0,0,0.7)] px-3  !justify-start w-full">
                پوشاک
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                onClick={() => openSubmenu(0)}
                className="absolute top-[10px] left-[15px] cursor-pointer"
              />
            ) : (
              <FaRegPlusSquare
                onClick={() => openSubmenu(0)}
                className="absolute top-[10px] left-[15px] cursor-pointer"
              />
            )}
            {submenuIndex === 0 && (
              <ul className="submenu  w-full  pr-3 ">
                <li className="mb-1 list-none relative">
                  <Link to="">
                    <Button className="!text-right !text-[rgba(0,0,0,0.7)] px-3  !justify-start w-full">
                      پوشیدنی
                    </Button>
                  </Link>

                  {innersubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      onClick={() => openInnerSubmenu(0)}
                      className="absolute top-[10px] left-[15px] cursor-pointer"
                    />
                  ) : (
                    <FaRegPlusSquare
                      onClick={() => openInnerSubmenu(0)}
                      className="absolute top-[10px] left-[15px] cursor-pointer"
                    />
                  )}
                  {innersubmenuIndex == 0 && (
                    <ul className="inner_submenu  w-full  pr-3 ">
                      <li className="mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          تیشرت شنل دار
                        </Link>
                      </li>
                      <li className="mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          ساعت هوشمند
                        </Link>
                      </li>
                      <li className=" mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          دستبندهای الماس
                        </Link>
                      </li>
                      <li className=" mb-1 list-none relative">
                        <Link
                          to="/"
                          className=" link !text-right transition text-[14px] px-3  !justify-start w-full"
                        >
                          کاور تبلت
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.isOpenCatPanel}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
