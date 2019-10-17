import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';
import RecipeList from './RecipeList';
import SideBar from '../side/SideBar';
import RecentActivity from '../side/RecentActivity';
import RecipeForm from '../form/RecipeForm';
import CreateForm from '../form/CreateForm';

interface IProps {
    recipes: IRecipe[];
    selectRecipe: (id: string) => void;
    selectedRecipe: IRecipe | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    createMode: boolean;
    setCreateMode: (createMode: boolean) => void;
    openCreateForm: () => void;
}

const Home: React.FC<IProps> = ({ 
  recipes, 
  selectRecipe, 
  selectedRecipe,
  editMode,
  setEditMode,
  createMode,
  setCreateMode,
  openCreateForm
 }) => {
  return (
    <Grid centered columns={3}>
      <Grid.Column width={3}>
        <SideBar
          openCreateForm={openCreateForm}
          setCreateMode={setCreateMode}
        />
      </Grid.Column>
      <Grid.Column width={8}>
        {createMode && <CreateForm setCreateMode={setCreateMode}/>}
        {!createMode && <RecipeList
          setEditMode={setEditMode}
          recipes={recipes}
          selectRecipe={selectRecipe}
          selectedRecipe={selectedRecipe}
        />}
      </Grid.Column>
      <Grid.Column width={4}>
        {!createMode && editMode && selectedRecipe && <RecipeForm recipe={selectedRecipe} setEditMode={setEditMode} />}
        {!editMode && <RecentActivity />}
      </Grid.Column>
    </Grid>
  );
};

export default Home
