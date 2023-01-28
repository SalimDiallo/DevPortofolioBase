import React, { useEffect } from 'react';
import Service from '../Components/Service';



import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="services" data-aos="zoom-out-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000">
           
            <div className="title">Services
            </div>
            <p className='top'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus magnam nostrum exercitationem non sed amet nisi placeat, porro quia!</p>

            <div className="element">
                <Service name="Web Designer" icon="fa-brands fa-figma"/>
                <Service name="Photography" icon="fa-solid fa-record-vinyl"/>
                <Service name="Web Developper" icon="fa-sharp fa-solid fa-code"/>
                <Service name="App Developping" icon="fa-solid fa-mobile-screen"/>
                <Service name="Branding" icon="fa-regular fa-copyright"/>
                <Service name="Products Strategy" icon="fa-sharp fa-solid fa-chart-simple"/>
            </div>


        </div>
    );
};

export default Services;