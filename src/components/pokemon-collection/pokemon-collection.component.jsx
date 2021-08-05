import React from 'react';

import "./pokemon-collection.styles.scss";

import PokemonCard from '../../components/pokemon-card/pokemon-card.component.jsx';

class PokemonCollection extends React.Component{

    constructor(props){
        super(props);
        this.state={
            collections: this.props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ collections: nextProps.data });  
      }


    render(){
        const {collections} = this.state;
        return(
            <div className="pokemon-collection">
                {collections.map(({ id, ...otherCollectionProps })=>(
                    <PokemonCard key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }

}

export default PokemonCollection;