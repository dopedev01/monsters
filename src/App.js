import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/Card-list';
import { Search } from './components/search-box/Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }
  render() {
    const { monsters, searchField } = this.state; //destructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())

    )



    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        
        <Cardlist monsters={filteredMonsters}>
        </Cardlist>
      </div>
    );
  }
}

export default App;
