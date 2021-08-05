import React from 'react';

import "./filter-button.styles.scss";

const FilterButton = ({ type, onClick }) => (
    <button className={`filter-button ${type.toLowerCase()}`} type="button" onClick={onClick} >
        {type}
    </button>
);

export default FilterButton
