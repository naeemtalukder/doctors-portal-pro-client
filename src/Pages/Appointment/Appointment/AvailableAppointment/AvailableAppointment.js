import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppiontmentOption from "./AppiontmentOption";
import { useQuery } from "react-query";
import Loading from "../../../Home/Shared/Loading/Loading";

const AvailableAppointment = ({ selectDate }) => {
  // const [appointmentOptions, setAppintmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOption", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  };


  return (
    <section className="md:my-16">
      <p className="text-center font-bold text-secondary">
        Available Appointment On {format(selectDate, "PP")}{" "}
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10">
        {appointmentOptions.map((option) => (
          <AppiontmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppiontmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectDate={selectDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
