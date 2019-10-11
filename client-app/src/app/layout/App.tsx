import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';

class App extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/recipes')
      .then((response) => {
        this.setState({
          recipes: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Recipe Wallet</Header.Content>
        </Header>
        <List>
          {this.state.recipes.map((recipe: any) => (
            <List.Item key={recipe.id}>{recipe.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
  
}

export default App;
