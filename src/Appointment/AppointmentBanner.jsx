import React from 'react';
import chair from '../assets/images/chair.png'
import bg from '../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}
            class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt='dantist chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;