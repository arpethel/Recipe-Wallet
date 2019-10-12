import React from 'react';
import { Grid, List, Card } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';
import RecipeList from './RecipeList';

interface IProps {
    recipes: IRecipe[]
}

const ShowRecipes: React.FC<IProps> = ({recipes}) => {
    return (
      <Grid>
        <Grid.Column width={10}>
          <RecipeList recipes={recipes}/>
          {/* <List>
            {recipes.map(recipe => (
              <List.Item key={recipe.id}>{recipe.title}</List.Item>
            ))}
          </List> */}
        </Grid.Column>
      </Grid>
    );
}

export default ShowRecipes
