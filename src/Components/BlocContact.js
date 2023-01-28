import React from 'react';

const BlocContact = ({icon, desc, name, adresse}) => {
    return (
       <div className="contact">
            <div className="icons"><div className="icon"><i className={icon}></i></div></div>
            <h2 className='name'>{name}</h2>
                {adresse && <div className='adresse'> {adresse} </div>}
                {desc && <div className='desc'> {desc} </div>}
        </div>
    );
};

export default BlocContact;