import React from 'react';

const Stat = ({ name , percent}) => {
    return (
       <div className="stat">
            <div className='infos'>
                <h1>{name}</h1>
                <h1>{percent}</h1>
            </div>
            <div className='evolutionBloc'>
                <div className="interne" style={{width: percent}}></div>
            </div>
        </div>
    );
};

export default Stat;