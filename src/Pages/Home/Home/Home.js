import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServiceLanding from './Services/ServiceLanding';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <InfoCards/>
            <Services/>
            <ServiceLanding/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;