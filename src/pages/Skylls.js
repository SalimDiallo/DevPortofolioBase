import React, { useEffect } from 'react';
import Stat from '../Components/Stat';



import AOS from 'aos';
import 'aos/dist/aos.css';


const Skylls = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="skyls" data-aos="zoom-out-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000">
            
            <div>
                <h1 className="title">My Skyls</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nulla nam eos illum? Itaque, veritatis.</p>
            </div>

            <div className="stats">
                <Stat name="React js" percent="90%" />
                <Stat name="Fluter" percent="50%"/>
                <Stat name="Php" percent="60%"/>
                <Stat name="Ui Design" percent='40%'/>
                <Stat name="Seo" percent='55%'/>
                <Stat name="Marketing digital" percent='70%'/>
            </div>
        </div>
    );
};

export default Skylls;