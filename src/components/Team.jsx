import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "./Team.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import { FaLink } from 'react-icons/fa';



const Team = () => {
  return (
    <div className="team_home">
      
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide style={{ width:'50%',maxWidth: '60%',marginRight:'10px' }}  className=" team_div m-4 h-3/4">
        <div className="mt-2 m-auto w-11/12 h-2/3 ">
        <FcBusinessman className="text-black w-full h-full bg-fill" />

        </div>
        <div className="flex justify-between mx-auto w-3/4">
        <div className="mb-2 mx-auto w-3/4">
          <p className="bg-inherit text_light_green font-bold lucid_font opacity-75">Victor</p>
          <p className="text-black font-bold opacity-75 text-sm">Full Stack developer</p>
        </div>
        <div className="mt-2 flex w-1/4 justify-end pointer-cursor">
          <FaLink className="bg-inherit text_light_green " />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ width:'50%',maxWidth: '60%',marginRight:'10px' }}  className=" team_div m-4 h-3/4">
        <div className="mt-2 m-auto w-11/12 h-2/3 ">
        <FcBusinessman className="text-black w-full h-full bg-fill" />

        </div>
        <div className="flex justify-between mx-auto w-3/4">
        <div className="mb-2 mx-auto w-3/4">
          <p className="bg-inherit text_light_green font-bold lucid_font opacity-75">Victor</p>
          <p className="text-black font-bold opacity-75 text-sm">Full Stack developer</p>
        </div>
        <div className="mt-2 flex w-1/4 justify-end pointer-cursor">
          <FaLink className="bg-inherit text_light_green " />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ width:'50%',maxWidth: '60%',marginRight:'10px' }}  className=" team_div m-4 h-3/4">
        <div className="mt-2 m-auto w-11/12 h-2/3 ">
        <FcBusinessman className="text-black w-full h-full bg-fill" />

        </div>
        <div className="flex justify-between mx-auto w-3/4">
        <div className="mb-2 mx-auto w-3/4">
          <p className="bg-inherit text_light_green font-bold lucid_font opacity-75">Victor</p>
          <p className="text-black font-bold opacity-75 text-sm">Full Stack developer</p>
        </div>
        <div className="mt-2 flex w-1/4 justify-end pointer-cursor">
          <FaLink className="bg-inherit text_light_green " />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ width:'50%',maxWidth: '60%',marginRight:'10px' }}  className=" team_div m-4 h-3/4">
        <div className="mt-2 m-auto w-11/12 h-2/3 ">
        <FcBusinessman className="text-black w-full h-full bg-fill" />

        </div>
        <div className="flex justify-between mx-auto w-3/4">
        <div className="mb-2 mx-auto w-3/4">
          <p className="bg-inherit text_light_green font-bold lucid_font opacity-75">Victor</p>
          <p className="text-black font-bold opacity-75 text-sm">Full Stack developer</p>
        </div>
        <div className="mt-2 flex w-1/4 justify-end pointer-cursor">
          <FaLink className="bg-inherit text_light_green " />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ width:'50%',maxWidth: '60%',marginRight:'10px' }}  className=" team_div m-4 h-3/4">
        <div className="mt-2 m-auto w-11/12 h-2/3 ">
        <FcBusinesswoman className="text-black w-full h-full bg-fill" />

        </div>
        <div className="flex justify-between mx-auto w-3/4">
        <div className="mb-2 mx-auto w-3/4">
          <p className="bg-inherit text_light_green font-bold lucid_font opacity-75">Victor</p>
          <p className="text-black font-bold opacity-75 text-sm">Full Stack developer</p>
        </div>
        <div className="mt-2 flex w-1/4 justify-end pointer-cursor">
          <FaLink className="bg-inherit text_light_green " />
        </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Team;
