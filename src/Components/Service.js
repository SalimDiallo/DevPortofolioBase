import React from 'react';

const Service = ({name , icon}) => {
    return (
       <div className="service">
         <div className='bloc'>
             <div className="icon">
                <i class={icon}></i>
            </div>
            <h1>{name}</h1>
        </div>
        </div>
    );
};

export default Service;