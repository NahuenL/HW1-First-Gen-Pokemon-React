import React from 'react';
import { Switch, Route } from 'react-router';
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import PokemonPage from "./pages/pokemon/pokemon.component";


class App extends React.Component{

    constructor(){
      super();
    }

    render(){
      return(
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pokemon" component={PokemonPage} />
          </Switch>
        </div>
      );

    }

}

export default App
