import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../accetes/icons/clock.svg';
import marker from '../../../../accetes/icons/marker.svg';
import phone from '../../../../accetes/icons/phone.svg';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone ,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard 
                key={card.id}
                card={card}
                >
                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;