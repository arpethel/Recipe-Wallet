import React, {useState, useEffect} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';
import { IRecipe } from '../models/recipe';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    axios.get<IRecipe[]>('http://localhost:5000/api/recipes')
      .then((response) => {
        setRecipes(response.data)
      });
  }, []);

  return (
    <div>
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Recipe Wallet</Header.Content>
      </Header>
      <List>
        {recipes.map((recipe) => (
          <List.Item key={recipe.id}>{recipe.title}</List.Item>
        ))}
      </List>
    </div>
  );
  
  
}

export default App;
