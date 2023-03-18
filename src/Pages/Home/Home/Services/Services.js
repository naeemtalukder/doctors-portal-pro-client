import React from 'react';
import fluoride from '../../../../accetes/images/fluoride.png';
import cavity from '../../../../accetes/images/cavity.png';
import whitening from '../../../../accetes/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            img: whitening,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='mt-16'> 
            <div className='text-center'>
                <h3 className= 'text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl text-accent'>Services We provider</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service} 
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;