import React, { Component } from 'react';
import todosList from './todos.json';
import TodoLists from './todoLists/TodoLists';
// import TodoItem from './todoLists/TodoItem';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: todosList }
  }

  render() {
    console.log(todosList)
    
    console.log(this.state.todos)
    return (

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>

        <section className="main">
        <TodoLists todos={this.state.todos} />
        </section>

        <footer className="footer">

          <span className="todo-count"><strong>0</strong> item(s) left</span>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
  
    );
  }
}

export default App;
