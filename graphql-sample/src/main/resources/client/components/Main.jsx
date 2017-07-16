import React, {Component} from 'react';
import axios from 'axios';
import gql from 'graphql-tag';

const QUERY = `
{ users 
  { 
    id 
  } 
}
`

class Main extends Component {
  handleResponse(response) {
    alert(res);
  }

  handleClick() {
    axios.post('api/testUserQuery', { query: QUERY})
      .then( (res) => this.handleResponse(res))
      .catch( e => { throw new Error(e) })
  }

  render() {
    return (
      <div>
        <p>App Container div</p>
        <p>custom QUERY = {QUERY}</p>
        <button onClick={this.handleClick}>
          Submit Test query
        </button>
      </div>
    );
  }
}

export default Main;
