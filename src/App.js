import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    search: "",
  };

  searchHandler = (event) => {
    this.setState({ search: event.target.value })
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
          <h1>Sort Algorithms</h1>
          <div className='search'>
            <label htmlFor="search">search</label>
            <input type="text" name="search" onChange={this.searchHandler}></input>
          </div>
        </div >
    );
  }
}

export default App;