import React from "react";

const AppiontmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary justify-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'Spaces': 'Space'} available</p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary text-white">Book Appiontment</button>
        </div>
      </div>
    </div>
  );
};

export default AppiontmentOption;
