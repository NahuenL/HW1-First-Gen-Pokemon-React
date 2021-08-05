/*import React from 'react'

import FilterGroup from '../../components/filter-group/filter-group.component';
import PokemonCollection from '../../components/pokemon-collection/pokemon-collection.component';


import "./pokemon.styles.scss";
                   
const PokemonPage = () => (
    <div className="pokemon-page">
        <FilterGroup />
        <PokemonCollection />
    </div>
);

export default PokemonPage;*/

import React from 'react';

import "./pokemon.styles.scss";

import POKE_DATA from '../../pages/pokemon/pokemon.data.js';

import FilterGroup from '../../components/filter-group/filter-group.component';

import PokemonCollection from '../../components/pokemon-collection/pokemon-collection.component.jsx';


class PokemonPage extends React.Component{

    constructor(){
        super();
        this.state={
            data :POKE_DATA
        };
    }

    filterClick = (event) =>{
        const {value, name} = event.target;
        const data_filtered = (event.target.innerText !== 'All') ? POKE_DATA.filter(pokemon => pokemon.type.includes(event.target.innerText)) : POKE_DATA;
        this.setState({ data:data_filtered });
    };

    render(){
        const {data} = this.state;
        return(
            <div className="pokemon-page">
                <FilterGroup onClick={this.filterClick} />
                <PokemonCollection data={data} />
            </div>
        );
    }

}

export default PokemonPage;
