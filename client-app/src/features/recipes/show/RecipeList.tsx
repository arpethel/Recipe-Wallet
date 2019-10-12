import React, { Fragment } from 'react';
import { Card, Image, Icon, Segment, Button, Grid } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipes: IRecipe[]
}

const RecipeList: React.FC<IProps> = ({recipes}) => {
    return (
      <Fragment>
        {recipes.map(recipe => (
          <Card key={recipe.id} fluid centered style={{ minWidth: "300px"}}>
            <Card.Header style={{ padding: "5px" }}>
              Username1123
              <Grid.Column floated="right">
                <Card.Meta>{recipe.cuisine}</Card.Meta>
              </Grid.Column>
            </Card.Header>

            <Image src="/assets/placeholder.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                {recipe.title}
                <Grid.Column floated="right">
                  <Icon name="comment" style={{ paddingRight: "30px" }}></Icon>
                  <Icon name="share" style={{ paddingRight: "25px" }}></Icon>
                  <Icon name="heart" color="red"></Icon>
                </Grid.Column>
              </Card.Header>
              <Card.Meta>{recipe.cuisine}</Card.Meta>
              <Card.Meta>
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Grid.Column floated="right">
                  Ready in: 1 hr, 15 min{recipe.cooktime}
                </Grid.Column>
              </Card.Meta>
              <Card.Description>{recipe.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>Posted on {recipe.date}</a>
            </Card.Content>
          </Card>
        ))}
      </Fragment>
    );
}

export default RecipeList
