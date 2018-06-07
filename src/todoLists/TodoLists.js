import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoLists extends Component {

    render(){
        return (
        <div>
            <ul className="todo-list">
            {this.props.todos.map( todo => <li><TodoItem title={todo.title}  /></li> )}
            </ul>
        </div>
        );
    }
}

export default TodoLists;
