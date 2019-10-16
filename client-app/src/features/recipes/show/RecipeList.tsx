import React, { Fragment } from 'react';
import { Card, Image, Icon, Grid, Accordion, Button, Segment, Form } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipes: IRecipe[];
    // recipe: IRecipe;
    selectRecipe: (id: string) => void;
    selectedRecipe: IRecipe | null;
}

const recipeDetails = (r : IRecipe) => {
  return [
    {
      title: "Details",
      content: [
        <div>
          <p><em>Ready in: {r.cooktime}</em></p>
        </div>,
        <br />,
        <div style={{ fontSize: "18px" }}>
          <em>{r.ingredients}</em>
        </div>,
        <br />,
        <div>
          <p>{r.description}</p>
        </div>,
        <br />,
        <div>
          <p>{r.directions}</p>
        </div>,
        <br/>,
        <div>
          <Button secondary floated="right">Edit</Button>
        </div>
      ]
    }
  ];
}

const editRecipe = [
  {
    key: "details",
    title: "Optional Details",
    content: {
      as: Form.Input,
      label: "Maiden Name",
      placeholder: "Maiden Name"
    }
  }
];



const RecipeList: React.FC<IProps> = ({recipes, selectRecipe}) => {
    
    return (
      <Fragment>
        {recipes.map(recipe => (
          <Card key={recipe.id} fluid centered style={{ minWidth: "300px" }}>
            <Card.Header style={{ padding: "5px" }}>
              Username1123
              <Grid.Column floated="right">
                <Card.Meta onClick={() => selectRecipe(recipe.id)}>
                  <a>{recipe.cuisine}</a>
                </Card.Meta>
              </Grid.Column>
            </Card.Header>

            <Image
              src={`/assets/cuisineImages/${recipe.title}.jpg`}
              wrapped
              ui={false}
            />

            <Card.Content>
              <Card.Header>
                {recipe.title}
                <Grid.Column floated="right" style={{ marginTop: "20px" }}>
                  <Icon
                    name="comment"
                    size="large"
                    style={{ paddingRight: "45px" }}
                  ></Icon>
                  <Icon
                    name="share"
                    size="large"
                    style={{ paddingRight: "40px" }}
                  ></Icon>
                  <Icon name="heart" size="large" color="red"></Icon>
                </Grid.Column>
              </Card.Header>

              <Card.Meta style={{ marginTop: "15px" }}>
                <Icon name="star" size="large" />
                <Icon name="star" size="large" />
                <Icon name="star" size="large" />
                <Icon name="star" size="large" />
                <Icon name="star" size="large" />
              </Card.Meta>
            </Card.Content>
            <Card.Content>
              <Accordion
                defaultActiveIndex={-1}
                panels={recipeDetails(recipe)}
              />
            </Card.Content>
          </Card>
        ))}
      </Fragment>
    );
}

export default RecipeList
