import React, {useState} from 'react'
import { Segment, Form, Header, Button } from 'semantic-ui-react'
import { IRecipe } from '../../../app/models/recipe';

interface IProps {
    recipe: IRecipe;
    setEditMode: (editMode: boolean) => void;
}

const cuisineOptions = [
  {
    key: "Indian",
    text: "Indian",
    value: "Indian"
  },
  {
    key: "North American",
    text: "North American",
    value: "North American"
  },
  {
    key: "Chinese",
    text: "Chinese",
    value: "Chinese"
  },
  {
    key: "Japanese",
    text: "Japanese",
    value: "Japanese"
  },
  {
    key: "Thai",
    text: "Thai",
    value: "Thai"
  },
  {
    key: "African",
    text: "African",
    value: "African"
  },
  {
    key: "South American",
    text: "South American",
    value: "South American"
  },
  {
    key: "European",
    text: "European",
    value: "European"
  }
];

const RecipeForm: React.FC<IProps> = ({recipe: initialFormState, setEditMode}) => {

    const initializeForm = () => {
      if (initialFormState) {
        return initialFormState;
      } else {
        return {
          id: "",
          title: "",
          cuisine: "",
          ingredients: "",
          directions: "",
          description: "",
          cooktime: "",
          rating: 0,
          date: ""
        };
      }
    };

    const [recipe, setRecipe] = useState<IRecipe>(initializeForm)

    return (
      <Segment
        clearing
        fluid
        style={{
          overflow: "auto",
          position: "fixed",
          maxHeight: "800px",
          minWidth: "275px",
          width: "275px"
        }}
      >
        <Form>
          <Header>Edit {recipe.title}</Header>

          <Form.Input placeholder="Title" value={recipe.title} />
          <Form.Dropdown
            placeholder="Select Cuisine"
            fluid
            selection
            options={cuisineOptions}
            value={recipe.cuisine}
          />
          <Header>Cook Time</Header>
          <Form.Input type="time" value={recipe.cooktime} />

          <Header>Description</Header>
          <Form.TextArea
            placeholder="Tell us about your recipe"
            value={recipe.description}
          />

          <Header>List of Ingredients</Header>
          <Form.Group widths={2}>
            <Form.Input
              width={7}
              type="number"
              name="quantity"
              min="0"
              max="5"
            />
            <Form.Input
              style={{ paddingLeft: "5px" }}
              width={15}
              placeholder="e.g. Carrots"
              value={recipe.ingredients}
            />
          </Form.Group>

          <Form.Group widths={2}>
            <Form.Input
              width={7}
              type="number"
              name="quantity"
              min="0"
              max="5"
            />
            <Form.Input
              style={{ paddingLeft: "5px" }}
              width={15}
              placeholder="e.g. Carrots"
              value={recipe.ingredients}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              width={7}
              type="number"
              name="quantity"
              min="0"
              max="5"
            />
            <Form.Input
              style={{ paddingLeft: "5px" }}
              width={15}
              placeholder="e.g. Carrots"
              value={recipe.ingredients}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              width={7}
              type="number"
              name="quantity"
              min="0"
              max="5"
            />
            <Form.Input
              style={{ paddingLeft: "5px" }}
              width={15}
              placeholder="e.g. Carrots"
              value={recipe.ingredients}
            />
          </Form.Group>

          <Header>Directions</Header>
          <Form.TextArea placeholder="e.g. Place two eggs in the pan" value={recipe.directions} />

          <Button floated="right" positive type="submit" content="Create" />
          <Button
            onClick={() => setEditMode(false)}
            floated="right"
            type="button"
            content="Cancel"
          />
        </Form>
      </Segment>
    );
}

export default RecipeForm
