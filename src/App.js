import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <div className="screen-size">
      <Switch>
        <Route exact path="/" />
        <RecipesProvider>
          <Route path="/foods" render={ Recipes } />
          <Route path="/drinks" render={ Recipes } />
        </RecipesProvider>
        <Route path="/foods/{id-da-receita}" />
        <Route path="/drinks/{id-da-receita}" />
        <Route path="/foods/{id-da-receita}/in-progress" />
        <Route path="/drinks/{id-da-receita}/in-progress" />
        <Route path="/profile" />
        <Route path="/done-recipes" />
        <Route path="/favorite-recipes" />
      </Switch>
    </div>
  );
}

export default App;