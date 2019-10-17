import React, { Fragment } from 'react';
import { Card, Image, Icon, Grid, Accordion } from 'semantic-ui-react';
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipes: IRecipe[];
    selectRecipe: (id: string) => void;
    selectedRecipe: IRecipe | null;
    setEditMode: (editMode: boolean) => void;
}

const recipeDetails = (r : IRecipe, setEditMode: ((editMode: boolean) => void)) => {
  return [
    {
      title: "Details",
      content: [
        <div>
          <p>
            <em>Ready in: {r.cooktime}</em>
          </p>
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
        <Grid.Column floated="right">
          <Card.Meta onClick={() => setEditMode(true)}>
            <a>Edit</a>
          </Card.Meta>
        </Grid.Column>
      ]
    }
  ];
}

const RecipeList: React.FC<IProps> = ({recipes, selectRecipe, setEditMode}) => {
    
    return (
      <Fragment>
        {recipes.map(recipe => (
          <Card key={recipe.id} fluid centered style={{ minWidth: "300px" }}>
            <Card.Header style={{ padding: "5px" }}>Username1123</Card.Header>

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
            <Card.Content onClick={() => selectRecipe(recipe.id)}>
              <Accordion
                defaultActiveIndex={-1}
                panels={recipeDetails(recipe, setEditMode)}
                style={{transitionProperty: 'height', transitionDuration: '2s', transitionTimingFunction: 'linear', transitionDelay: '1s'}}
              />
            </Card.Content>
          </Card>
        ))}
      </Fragment>
    );
}

export default RecipeList
