import React, {useState, useEffect, Fragment} from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import axios from 'axios';
import { IRecipe } from '../models/recipe';
import NavBar from '../../features/nav/NavBar';
import ShowRecipes from '../../features/recipes/show/ShowRecipes';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    axios.get<IRecipe[]>('http://localhost:5000/api/recipes')
      .then((response) => {
        setRecipes(response.data)
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ShowRecipes recipes={recipes}/>
      </Container>
    </Fragment>
  );
  
  
}

export default App;
