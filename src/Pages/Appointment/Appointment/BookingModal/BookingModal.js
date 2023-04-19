import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectDate ,refetch}) => {
  const {_id, name, slots} = treatment;
  const date = format(selectDate, "PP");

  const handleBooking = event => {
    event.preventDefault();
    const slot = event.terget.slot.value;
    console.log(_id, name , slot)
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
          <h3 className="text-lg font-bold"></h3>
          <form 
          onSubmit={handleBooking}
          className="grid grid-cols-1 gap-3 mt-6">
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
            
            </select>
            <input
              name="name"
              type="text"
               disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
             disabled
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
              className="btn btn-accent"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
