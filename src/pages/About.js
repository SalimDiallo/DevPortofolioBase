import React, { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
       <div data-aos="flip-up"
     data-aos-easing="ease-in-out"
     data-aos-duration="2000" className="about">
            
            <div className="img">
                <img src="profil.png" alt="" />
            </div>
            <div className="cv">
                <h1 className='title'>About Me</h1>
                <p>i'm a devlopper full stack in the web technologie. You can see more about me right now and nice to meet you</p>

                <h2><span>Name:</span> Salim Diallo</h2>
                <h2><span>Date of birth:</span> January 01, 1987</h2>
                <h2><span>Address:</span>
                Fes Saiss 30098 Morroco</h2>
                <h2><span>Zip code:</span> 30000</h2>
                <h2><span>Email:</span>
                dsidymouhamed@gmail.com</h2>
                <h2><span>Phone:</span>
                +212-68-44-99-227</h2>
                <h3><span>120 </span> Projects completed</h3>
                <button className="button1">Download Cv</button>
            </div>
        </div>
    );
};

export default About;