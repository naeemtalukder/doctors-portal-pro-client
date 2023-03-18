import React from 'react';
import { ImClock } from "react-icons/im";
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: ImClock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: ImClock,
            bgClass: 'bg-primary'
        },
        {
            id: 3,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: ImClock,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div>
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