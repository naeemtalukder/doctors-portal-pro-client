import React from "react";
// import BannerBg from "../../../../../public/assets/images/appointment.png";
// import chair from "../../../../../public/assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/k4H7XGY/bg.png")` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/9t49H59/chair.png"
          className="rounded-lg w-1/2 shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
