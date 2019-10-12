import React from 'react';
import { Grid, List, Card, Sticky, Rail } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';
import RecipeList from './RecipeList';
import SideBar from '../side/SideBar';
import RecentActivity from '../side/RecentActivity';
import RecipeForm from '../form/RecipeForm';

interface IProps {
    recipes: IRecipe[]
}

const ShowRecipes: React.FC<IProps> = ({recipes}) => {
    return (
      <Grid centered columns={3}>
        <Grid.Column width={8}>
          <RecipeList recipes={recipes} />
        </Grid.Column>
        <Grid.Column width={4}>

 
              <SideBar />
              <RecentActivity />
              <RecipeForm />


        </Grid.Column>
      </Grid>
    );
}

export default ShowRecipes
