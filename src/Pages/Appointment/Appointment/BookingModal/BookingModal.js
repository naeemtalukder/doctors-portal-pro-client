import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectDate }) => {
  const { name, slots } = treatment;
  const date = format(selectDate, "PP");

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(date, slot, name, email, phone);
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form 
          onSubmit={handleBooking}
          className="grid grid-cols-1 gap-3 mt-6">
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered"
            />
            <select className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
