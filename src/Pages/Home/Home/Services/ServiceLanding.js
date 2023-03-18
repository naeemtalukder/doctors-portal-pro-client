import React from "react";
import treatment from "../../../../accetes/images/treatment.png";

const ServiceLanding = () => {
  return (
    <div className="card lg:card-side mx-[217px] my-20">
      <figure>
        <img
          src={treatment}
          alt="Album"
          className="w-[458px] h-[576px]"
        />
      </figure>
      <div className="card-body w-[497px] h-[397px]">
        <h2 className="card-title md:text-3xl">Exceptional Dental Care, on Your Terms</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceLanding;
