import React from 'react';

import POKETYPE_DATA from '../../pages/pokemon/pokemon-type.data.js';

import "./filter-group.styles.scss";

import FilterButton from '../../components/filter-button/filter-button.component.jsx';

class FilterGroup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            collections: POKETYPE_DATA,
            onClick: this.props.onClick
        }
    }
    
    render(){
        const {collections, onClick} = this.state;
        return(
            <div className="filter-group">
                <h2>Filter by Type </h2>
                    <FilterButton key="0" type="All" onClick={onClick} />
                {collections.map(({ id, ...otherCollectionProps })=>(
                    <FilterButton key={id} {...otherCollectionProps} onClick={onClick} />
                ))}
            </div>
        );
    }

}

export default FilterGroup;