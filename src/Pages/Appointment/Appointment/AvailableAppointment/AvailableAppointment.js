import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppiontmentOption from './AppiontmentOption';
import { useQuery } from 'react-query';

const AvailableAppointment = ({selectDate, setSelectedDate}) => {
    // const [appointmentOptions, setAppintmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOption'],
        queryFn: () => fetch('http://localhost:5000/appointmentOption')
        .then(res => res.json())
    })

    // useEffect(() => {
    //      fetch('http://localhost:5000/appointmentOption')
    //     .then(res => res.json())
    //     .then(data => setAppintmentOptions(data))
    // }, []);

    return (
        <section className='md:my-16'>
            <p className='text-center font-bold text-secondary'>Available Appointment On {format(selectDate, 'PP')} </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10'>
                {
                    appointmentOptions.map(option => <AppiontmentOption
                    key={option._id} appointmentOption={option} setTreatment={setTreatment} ></AppiontmentOption>)
                }
            </div>
            { treatment &&
             <BookingModal treatment={treatment} selectDate={selectDate}></BookingModal>
             }
        </section>
    );
};

export default AvailableAppointment;