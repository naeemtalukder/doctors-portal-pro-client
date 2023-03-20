import React from "react";
import treatment from "../../../../accetes/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ServiceLanding = () => {
  return (
    <div className="card lg:card-side md:mx-[217px] md:my-20">
      <figure>
        <img
          src={treatment}
          alt="Album"
          className="md:w-[458px] md:h-[576px]"
        />
      </figure>
      <div className="card-body md:w-[497px] md:h-[397px]">
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
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceLanding;
