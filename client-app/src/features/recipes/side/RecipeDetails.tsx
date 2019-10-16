import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipe: IRecipe;
}

const RecipeDetails: React.FC<IProps> = ({recipe}) => {
    return (
      <Card fluid>
        <Image src={`/assets/cuisineImages/regionImages/${recipe.cuisine}.png`} wrapped ui={false} />
      </Card>
    );
}

export default RecipeDetails
