import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppiontmentOption from './AppiontmentOption';

const AvailableAppointment = ({selectDate, setSelectedDate}) => {
    const [appintmentOptions, setAppintmentOptions] = useState([]);

    useEffect(() => {
        fetch('appiontmentOption.json')
        .then(res => res.json())
        .then(data => setAppintmentOptions(data))
    }, []);
    return (
        <section className='md:my-16'>
            <p className='text-center font-bold text-secondary'>Available Appointment On {format(selectDate, 'PP')} </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10'>
                {
                    appintmentOptions.map(option => <AppiontmentOption
                    key={option._id} appointmentOption={option}></AppiontmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;