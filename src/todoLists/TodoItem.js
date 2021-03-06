import React from 'react';

const TodoItem = (props) => {
    return (
    <div>
        <li className={props.todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle"  onChange={props.todoToggleClick(props.todo.id)} type="checkbox" checked={props.todo.completed}/>
                    <label>{props.todo.title}</label>
                    <button className="destroy" onClick={props.todoDestroy(props.todo.id)}></button>
            </div>
        </li>
    </div>
)    
        }
        
export default TodoItem;