import React from 'react';

import "./homepage.styles.scss";
import POKE_DATA from '../../pages/pokemon/pokemon.data.js';
import POKETYPE_DATA from '../../pages/pokemon/pokemon-type.data.js';

import InformationCard from '../../components/information-card/information-card.component';


class HomePage extends React.Component{

    constructor(){
        super();
        this.state={
            poke_data :POKE_DATA,
            poke_types :POKETYPE_DATA
        };
    }


    render(){
        const {poke_data, poke_types} = this.state;
        return(
            <div className="homepage">
                <InformationCard title="Pokémon Total" number={poke_data.length} className="All" />
                <InformationCard title="Diferent Types" number={poke_types.length} className="All" />
                {
                    poke_types.map((type,index)=>(
                        <InformationCard title={type.type} number={ poke_data.filter(pokemon => pokemon.type.includes(type.type)).length } className={type.type} />
                    ))
                }
            </div>
        );
    }

}

export default HomePage;
