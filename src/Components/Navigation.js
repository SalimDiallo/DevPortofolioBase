import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = () => {
         useEffect(() => {
        AOS.init();
      }, [])
    return (
       <div  className="navigation" data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000">
            <div className='title'> Salim </div>
            <div>
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/blog'>My Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;