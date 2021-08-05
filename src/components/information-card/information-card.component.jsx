import React from 'react';

import "./information-card.styles.scss";

const InformationCard = ({title, number, className}) => (

    <div className={`information-card ${className.toLowerCase()}`} >
        <span className="number">{number}</span>
        <span className="title">{title}</span>
    </div>
);

export default InformationCard;
