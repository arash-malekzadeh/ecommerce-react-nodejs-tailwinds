import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Navigation.css";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, SetisOpenCatPanel] = useState(true);

  const openCategoryPanel = () => {
    SetisOpenCatPanel(!isOpenCatPanel);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-10">
          <div className="col_1 w-[20%]">
            <Button
              onClick={openCategoryPanel}
              className="!text-black   !w-full gap-2 !font-bold"
            >
              <AiOutlineMenuFold className="text-[18px]" />
              دسته بندی کالاها
              <FaAngleDown className="text-[13px] mr-auto" />
            </Button>
          </div>
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                {" "}
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {" "}
                    صفحه اول{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    مد و پوشاک
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[200px] opacity-0 bg-white shadow-md">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                          مردانه
                        </Button>
                        <div className="submenu absolute top-[0%] right-[100%] min-w-[200px] opacity-0 bg-white shadow-md">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                                  تیشرت
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                                  جین
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                                  جوراب
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                                  ساعت
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                                  شلوار
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                          زنانه
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                          بچه گانه
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                          دخترانه
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                          پسرانه
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    الکترونیک
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    کیف
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    کفش و پاپوش
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    مواد غذایی
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    لوازم آرایشی
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    جواهرات
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[15%]">
            <p className="font-[500] flex items-center gap-3 mb-0 mt-0">
              <MdOutlineRocketLaunch />
              "ارسال رایگان بین‌المللی"
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        openCategoryPanel={openCategoryPanel}
        SetisOpenCatPanel={SetisOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
