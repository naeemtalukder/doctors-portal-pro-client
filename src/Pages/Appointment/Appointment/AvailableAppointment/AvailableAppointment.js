import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectDate, setSelectedDate}) => {
    return (
        <section className='md:mt-12'>
            <p className='text-center font-bold text-secondary'>Available Appointment On {format(selectDate, 'PP')} </p>
        </section>
    );
};

export default AvailableAppointment;