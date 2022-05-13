import React from 'react';
import Banner from '../Home/Banner';
import Contact from '../Home/Contact';
import DentalCare from '../Home/DentalCare';
import Footer from './Footer';
import Info from '../Home/Info';
import MakeAppointment from '../Home/MakeAppointment';
import Services from '../Home/Services';
import Testimonials from '../Home/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
            
        </div>
    );
};

export default Home;