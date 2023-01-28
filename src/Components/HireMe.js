import React from 'react';
import Bilan from './Bilan';

const HireMe = () => {
    return (
        <div className="hireme">
           <div className="bilans">
                <Bilan name='Awards' nbre='100'/>
                <Bilan name='Complete Projects' nbre='1200'/>
                <Bilan name='Happy Customers' nbre='1200'/>
                <Bilan name='Cups of coffee' nbre='500'/>
            </div>
            <div className="contenu">
               <div className="disponible">
                     <h2>I'm <span>Available</span> for <br /> freelancing</h2>
                     <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                     <button className="button1">HIRE ME</button>
                </div>
            </div>
        </div>
    );
};

export default HireMe;