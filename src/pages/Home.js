import React, { useEffect } from 'react';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import About from './About';
import Contact from './Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from './Resume';
import Services from './Services';
import Skylls from './Skylls';
import Projects from './Projects';
import Blogs from './Blogs';

const Home = () => {

      useEffect(() => {
        AOS.init();
      }, [])
    return (
       <div  className="home"  >
            <Mouse />
            <Navigation />
            <div data-aos="zoom-out-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000" className="content">
                <div  className="infos">
                    PortFolio <br /><span>Salim Diallo</span>  <br /> Je suis  <br /> <span>Developpeur Web</span>
                    <div className="buttons">
                        <button className='button1'>Me contacter</button>
                        <button className='button2'>Mes services</button>
                    </div>
                </div>
                <div className="img">
                    <img src="profil2.png" alt="" />
                </div>
            </div>
        <About />
        
        <Resume />
        <Services />
        <Skylls/>
        <Projects/>
        <Blogs/>
        <Contact />
        </div>
    );
};

export default Home;







