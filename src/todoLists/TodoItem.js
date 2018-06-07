import React from 'react';

const TodoItem = (props) => {
    return (
    <div>
        <li className="">
            <div className="view">
                <input className="toggle" type="checkbox" />
                    <label>{props.title}</label>
                    <button className="destroy"></button>
            </div>
        </li>
    </div>
)    
        }
        
export default TodoItem;