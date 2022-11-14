import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
    const initTodos = [
        {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
        },
        {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
        },
        {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
        }
    ];

    const localTodos = JSON.parse(localStorage.getItem("todos"));
    const [todos, setTodos] = useState(localTodos || []);

    // storing todos items
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (id) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        );
    }

    const deleteTodo = (id) => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            }),
        ]);
    }

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const editTitle = (newTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = newTitle;
                }
                return todo
            })
        );
    }

    return (
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputTodo addTodoItem={addTodoItem} />
                <TodosList
                    todos={todos}
                    onChange={handleChange}
                    deleteTodo={deleteTodo}
                    editTitle={editTitle}
                />
            </div>
        </div>
    );
}

export default TodoContainer