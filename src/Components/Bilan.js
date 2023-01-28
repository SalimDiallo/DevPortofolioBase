import React from 'react';

const Bilan = ({nbre , name}) => {
        
    return (
        <div className="bilan">
            <h1>{nbre}</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default Bilan;