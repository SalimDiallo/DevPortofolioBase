import React, { useEffect } from 'react';
import BlocResume from '../Components/BlocResume';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
        useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="resume" data-aos="zoom-out-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000">
          
            <h1 className="title">Resume</h1>

            <p className='top'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus aperiam tempora!</p>
            <div className="block">
                <BlocResume />
                <BlocResume />
                <BlocResume />
                <BlocResume />
            </div>
            <button className="button1">Download Cv</button>
        </div>
    );
};

export default Resume;