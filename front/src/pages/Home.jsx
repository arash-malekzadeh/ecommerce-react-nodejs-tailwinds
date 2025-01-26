import React from "react";
import HomeSlider from "./HomeSlider";
import CatSlider from "../components/Header/CatSlider/CatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <section className="py-5 bg-white  mt-5">
        <div className="container">
          <div className="freeShipping  w-full rounded-md p-4 border-2 flex justify-between items-center border-red-500">
            <div className="col1 flex items-center gap-4 ">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600]">
                ارسال سریع و رایگان
              </span>
            </div>

            <div className="col2">
              <p className="font-[500]">
                همین حالا ارسال رایگان در خرید اول شما بالای 200000 تومان
              </p>
            </div>
            <p className="font-bold text-[25px]"> فقط 200 هزارتومان</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
