import React from 'react'
import { Segment, Form, Dropdown, Header, Grid } from 'semantic-ui-react'

const friendOptions = [
  {
    key: "Indian",
    text: "Indian",
    value: "Indian",
  },
  {
    key: "North American",
    text: "North American",
    value: "North American",
  },
  {
    key: "Asian",
    text: "Asian",
    value: "Asian",
  },
  {
    key: "African",
    text: "African",
    value: "African",
  },
  {
    key: "South American",
    text: "South American",
    value: "South American",
  },
  {
    key: "European",
    text: "European",
    value: "European",
  }
];

const RecipeForm = () => {
    return (
      <Segment>
        <Form>
          <Header>Create New Recipe</Header>

          <Form.Input placeholder="Title" />
          <Form.Dropdown
            placeholder="Select Cuisine"
            fluid
            selection
            options={friendOptions}
          />
          <Header>Cook Time</Header>
          <Form.Input type="time" />

          <Header>Description</Header>
          <Form.TextArea placeholder="Tell us about your recipe" />

          <Header>List of Ingredients</Header>
          {/* <Form.Input type="number" name="quantity" min="0" max="5" /> */}
          <Form.Input placeholder="e.g. Carrots" />

          <Form.Input placeholder="e.g. Eggs" />
          <Form.Input placeholder="e.g. Celery" />
          <Form.Input placeholder="e.g. Beef" />
          <Form.Input placeholder="e.g. Cabbage" />

          <Header>Instructions</Header>
          <Form.TextArea placeholder="e.g. Place two eggs in the pan" />
        </Form>
      </Segment>
    );
}

export default RecipeForm
