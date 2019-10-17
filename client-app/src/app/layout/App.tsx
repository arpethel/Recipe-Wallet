import React, {useState, useEffect, Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios';
import { IRecipe } from '../models/recipe';
import NavBar from '../../features/nav/NavBar';
import Home from '../../features/recipes/show/Home';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [createMode, setCreateMode] = useState(false);

  const handleSelectRecipe = (id: string) => {
    setSelectedRecipe(recipes.filter(r => r.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setSelectedRecipe(null);
    setCreateMode(true);
  }

  useEffect(() => {
    axios.get<IRecipe[]>('http://localhost:5000/api/recipes')
      .then((response) => {
        setRecipes(response.data)
      });
  }, []);

  return (
    <Fragment>
      <NavBar  />
      <Container style={{ marginTop: "6em" }}>
        <Home
          recipes={recipes}
          selectRecipe={handleSelectRecipe}
          selectedRecipe={selectedRecipe}
          editMode={editMode}
          setEditMode={setEditMode}
          createMode={createMode}
          setCreateMode={setCreateMode}
          openCreateForm={handleOpenCreateForm}
        />
      </Container>
    </Fragment>
  );
  
  
}

export default App;
