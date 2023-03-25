import React, { useState } from "react";
import chair from "../../../../accetes/images/chair.png";
import { DayPicker } from "react-day-picker";
import bannerBg from "../../../../accetes/images/bg.png";

const AppointmentBanner = ({selectDate, setSelectedDate}) => {
  return (
    <header className="my-6"
    style={{ background: `url(${bannerBg})`, backgroundSize: "cover" }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-12">
          <img src={chair} alt="" className="max-w-sm rounded-lg shadow-xl" />
          <div className="mr-6 bg-white rounded-lg shadow-2xl">
            <DayPicker 
             mode="single"
             selected={selectDate}
             onSelect={setSelectedDate}
             />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
