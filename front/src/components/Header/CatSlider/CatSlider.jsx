import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../../assets/images/01.png";
import img2 from "../../../assets/images/02.png";
import img3 from "../../../assets/images/03.png";
import img4 from "../../../assets/images/04.png";
import img5 from "../../../assets/images/05.png";
import img6 from "../../../assets/images/06.png";
import img7 from "../../../assets/images/07.png";
import { Link } from "react-router-dom";
const CatSlider = () => {
  return (
    <div className="homeCatSlider py-8">
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={7}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Link to="">
              <div className="homeCatSlider item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img2} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img3} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img4} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img5} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img6} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img7} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="">
              <div className="item py-8 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={img1} className="w-[60px]" alt="" />
                <h3 className="text-[14px] font-[500] mt-3">کیف تبلت</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
