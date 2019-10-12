import React from 'react';
import { Grid, List, Card } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';
import RecipeList from './RecipeList';
import SideBar from '../side/SideBar';
import RecentActivity from '../side/RecentActivity';

interface IProps {
    recipes: IRecipe[]
}

const ShowRecipes: React.FC<IProps> = ({recipes}) => {
    return (
      <Grid centered>
        <Grid.Column width={8}>
          <RecipeList recipes={recipes} />
        </Grid.Column>
        <Grid.Column width={4}>
          <SideBar />
          <RecentActivity />
        </Grid.Column>
      </Grid>
    );
}

export default ShowRecipes
