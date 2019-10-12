import React from 'react';
import { Card, Image, Icon, Segment, Button } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipes: IRecipe[]
}

const RecipeList: React.FC<IProps> = ({recipes}) => {
    return (
      <Segment clearing>
        {recipes.map(recipe => (
          <Card vertical key={recipe.id}>
            <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {recipe.title}
                <Icon name="comment" floated="right"></Icon>
                <Icon name="share" floated="right"></Icon>
                <Icon name="heart" floated="right" color="red"></Icon>
              </Card.Header>
              <Card.Meta>{recipe.cuisine}</Card.Meta>
              <Card.Meta>
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                Ready in: {recipe.cooktime}
              </Card.Meta>
              <Card.Description>{recipe.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>Posted on {recipe.date}</a>
            </Card.Content>
          </Card>
        ))}
      </Segment>
    );
}

export default RecipeList
