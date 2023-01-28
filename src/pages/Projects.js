import React, { useEffect } from 'react';
import BlocGrid from '../Components/BlocGrid';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='projets' data-aos="zoom-out-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000">
           
            <div className="top">
               <h1 className="title">My Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in maiores nesciunt earum praesentium! Enim sint laboriosam facere deleniti commodi?</p>
            </div>
           <div className="wrapper">
                <BlocGrid name="one"/>
                <BlocGrid name='two' />
                <BlocGrid name='three' />
                <BlocGrid name='four' />
                <BlocGrid name='five' />
                <BlocGrid name='six' />
            </div>  

        </div>
    );
};

export default Projects;