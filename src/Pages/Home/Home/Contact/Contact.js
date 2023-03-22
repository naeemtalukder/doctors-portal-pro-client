import React from "react";
import appointmentBg from "../../../../accetes/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url(${appointmentBg})`, backgroundSize: "cover" }}
    >
      <div className="hero"></div>
      <div className="hero-conten">
        <div className="card flex-shrink-0 w-full">
          <div className="card-body">
            <div className="mb-10">
              <h4 className="text-xl text-secondary font-bold text-center">Testimonial</h4>
              <h2 className="text-4xl text-white">What Our Patients Says</h2>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <textarea className="textarea" placeholder="Your Massage"></textarea>
            <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
