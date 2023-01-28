import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="abouts">
                <h1>About</h1>
                <p className='elements'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="services">
                <h1>Links</h1>
                <ul>
                    <li><a href="a">Home</a></li>
                    <li><a href="a">About</a></li>
                    <li><a href="a">Services</a></li>
                    <li><a href="a">Projects</a></li>
                    <li><a href="a">Contact</a></li>
                </ul>
            </div>
            <div className="questions">
                <h1>Have a Questions ?</h1>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                <p>	+2 392 3929 210</p>
                <p>info@yourdomain.com</p>
            </div>
         </div>
    );
};

export default Footer;