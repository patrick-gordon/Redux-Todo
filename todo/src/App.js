import React, { Component } from 'react';
import '../styles/App.css';
import TodoContainer from '../src/Components/ToDoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Patrick's Todo List</h1>
        </header>
        <TodoContainer />
      </div>
    );
  }
}
export default App;
