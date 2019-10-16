import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipe: IRecipe;
    
    // setEditMode: (editMode: boolean) => void;
}

const RecipeDetails: React.FC<IProps> = ({recipe}) => {
    return (
      <Card fluid>
        <Image src={`/assets/cuisineImages/regionImages/${recipe.cuisine}.png`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{recipe.cuisine}</Card.Header>
          <Card.Meta>
            <span>Cuisine Wikipedia</span>
          </Card.Meta>
          <Card.Description>Cuisine Description</Card.Description>
        </Card.Content>
      </Card>
    );
}

export default RecipeDetails
