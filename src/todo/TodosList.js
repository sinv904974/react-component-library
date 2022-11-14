import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
    return (
        <ul>

            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={props.onChange}
                    deleteTodo={props.deleteTodo}
                    editTitle={props.editTitle}
                />
            ))}
        </ul>
    );
}
export default TodosList;