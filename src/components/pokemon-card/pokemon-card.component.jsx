import React from 'react'

import "./pokemon-card.styles.scss";

const PokemonCard = ({num,name,img,type}) => (
    <div className={`pokemon-card type ${type[0].toLowerCase()}`} >

        <div className="image" style={{backgroundImage:`url(${img})`}} />
        <div className="pokemon-card-name">
            <span className="number">{num} - </span>
            <span className="name">{name}</span>
        </div>
    </div>
    
);

export default PokemonCard;
