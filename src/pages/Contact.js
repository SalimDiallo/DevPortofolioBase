import React, { useEffect } from 'react';
import BlocContact from '../Components/BlocContact';
import Footer from '../Components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
       <div data-aos="zoom-out-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="2000"  className="contacts">
            
            <h1>Contact Me</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className="contenu">
                <BlocContact name="ADDRESS" desc="198 West 21th Street, Suite 721 New York NY 10016" icon="fa-solid fa-location-pin"/>
                <BlocContact name='CONTACT NUMBER' adresse="+212 68 44 99 227" icon="fa-solid fa-phone"/>
                <BlocContact name='EMAIL ADDRESS' adresse="afia@salimdiallo.com" icon="fa-solid fa-envelope"/>
                <BlocContact name='Website' adresse="www.salimdiallo.com" icon="fa-solid fa-code" />

            </div>

            <div className="message">
                <div className="img"><img src="profil.png" alt="" /></div>
                <div className="form">
                    <form action="" className="message-form">
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button className="button1">Envoyer</button>
                    </form>
                </div>
            </div>
            <Footer />

            <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
        </div>
    );
};

export default Contact;