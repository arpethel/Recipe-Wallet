import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';
import RecipeList from './RecipeList';
import SideBar from '../side/SideBar';
import RecentActivity from '../side/RecentActivity';
import RecipeForm from '../form/RecipeForm';
import RecipeDetails from '../side/RecipeDetails';

interface IProps {
    recipes: IRecipe[]
    selectRecipe: (id: string) => void;
    selectedRecipe: IRecipe | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
}

const Home: React.FC<IProps> = ({ 
  recipes, 
  selectRecipe, 
  selectedRecipe,
  editMode,
  setEditMode
 }) => {
  return (
    <Grid centered columns={3}>
      <Grid.Column width={3}>
        <SideBar setEditMode={setEditMode} />
        {/* {editMode && <RecipeForm />} */}
      </Grid.Column>
      <Grid.Column width={8}>
        <RecipeList recipes={recipes} selectRecipe={selectRecipe} selectedRecipe={selectedRecipe} />
      </Grid.Column>
      <Grid.Column width={4}>
        <RecentActivity />
      </Grid.Column>
    </Grid>
  );
};

export default Home
