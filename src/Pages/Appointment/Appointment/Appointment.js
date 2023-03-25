import React, { useState } from 'react';
import AppointmentBanner from './AppoinmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner selectDate={selectDate} setSelectedDate={setSelectedDate} />
            <AvailableAppointment  selectDate={selectDate} setSelectedDate={setSelectedDate} />
        </div>
    );
};

export default Appointment;