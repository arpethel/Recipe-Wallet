import React from "react";
import { Segment, Form, Header, Button, Image } from "semantic-ui-react";

interface IProps {
    setCreateMode: (createMode: boolean) => void;
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

const RecipeForm: React.FC<IProps> = ({setCreateMode}) => {
  return (
    <Segment clearing>
      <Form>
        <Image src="/assets/placeholder.png"></Image>
        <Header textAlign="center">Add Photo</Header>

        <Header>Create New Recipe</Header>
        <Form.Input placeholder="Title" />
        <Form.Dropdown
          placeholder="Select Cuisine"
          fluid
          selection
          options={cuisineOptions}
        />
        <Header>Cook Time</Header>
        <Form.Input type="time" />

        <Header>Description</Header>
        <Form.TextArea placeholder="Tell us about your recipe" />

        <Header>List of Ingredients</Header>
        <Form.Group widths={2}>
          <Form.Input width={7} type="number" name="quantity" min="0" max="5" />
          <Form.Input
            style={{ paddingLeft: "5px" }}
            width={15}
            placeholder="e.g. Carrots"
          />
        </Form.Group>

        <Form.Group widths={2}>
          <Form.Input width={7} type="number" name="quantity" min="0" max="5" />
          <Form.Input
            style={{ paddingLeft: "5px" }}
            width={15}
            placeholder="e.g. Carrots"
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input width={7} type="number" name="quantity" min="0" max="5" />
          <Form.Input
            style={{ paddingLeft: "5px" }}
            width={15}
            placeholder="e.g. Carrots"
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input width={7} type="number" name="quantity" min="0" max="5" />
          <Form.Input
            style={{ paddingLeft: "5px" }}
            width={15}
            placeholder="e.g. Carrots"
          />
        </Form.Group>

        <Header>Instructions</Header>
        <Form.TextArea placeholder="e.g. Place two eggs in the pan" />

        <Button floated="right" positive type="submit" content="Create" />
        <Button
          onClick={() => setCreateMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default RecipeForm;