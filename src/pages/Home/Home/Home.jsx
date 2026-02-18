import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import ClientLogos from '../ClientLogos/ClientLogos';
import Features from '../Features/Features';
import BeMarchent from '../BeMarchent/BeMarchent';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <ClientLogos></ClientLogos>
           <Features></Features>
           <BeMarchent></BeMarchent>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;