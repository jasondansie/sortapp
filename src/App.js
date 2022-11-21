import './App.css';
import { Component } from 'react';
import bubbleSort from './bubbleSort';

class App extends Component {

  state = {
    message: "",
    search: "",
  };
  
  searchHandler = (event) => {
    this.setState({ search: event.target.value});
    console.log(event.target.value);
  }

  clickHandler = (event) => {
    event.preventDefault();
    let temp;
    let results = "";
    const array = this.state.search.split(",").map(Number); 
    
    temp = bubbleSort(array);

    temp.forEach(num => {
      results = `${results} ${num}`;
    });

    this.setState({
      message: results,
    });
  }
  
  render(){
    return (
      <div>
          <h1>Sort Algorithms</h1>
          <div className='search'>
          <h3>Enter numbers seperated with a comma</h3>
            <input type="text" name="search" onChange={this.searchHandler}></input>
            <button onClick={this.clickHandler}>Run bubble sort</button>
          </div>        
          <h2>Results: {this.state.message}</h2>       
        </div >
    );
  }   
}

export default App;