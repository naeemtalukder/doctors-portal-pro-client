import React from "react";
import doctor from "../../../../accetes/images/doctor.png"
import bgAppointment from "../../../../accetes/images/appointment.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="md:mt-32"
    style={{
        background: `url(${bgAppointment})`
    }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="text-xl font-bold text-secondary">Appointment</h4>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
