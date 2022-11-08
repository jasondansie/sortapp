import './App.css';
import { Component } from 'react';
import bubbleSort from './bubbleSort';


class App extends Component {

  state = {
    message: "no numbers added.",
    search: "",
    answer: ""
  };
  
  
  searchHandler = (event) => {
    this.setState({ search: event.target.value});
    console.log(event.target.value);
    console.log("search: ",search);
  }

  clickHandler = (event) => {
    event.preventDefault();
    
    console.log(message);
    var array = this.state.search.split(",").map(Number);   
    this.setState({this.state.message}bubbleSort(array));
    console.log("answer:", answer);
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
          <h2>Message: {answer}</h2>
          
        </div >
    );
  }   
}

export default App;