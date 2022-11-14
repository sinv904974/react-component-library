import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
    const [input, setInput] = useState({
        title: ""
    });

    const handleChange = (e) => {
        setInput(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.title.trim()) {
            props.addTodoItem(input.title);
            setInput(prevState => {
                return { ...prevState, title: "" };
            });
            //setInput({ ...input, title: "" });

        } else {
            alert('Please write item');
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input
                className='input-text'
                type='text'
                placeholder='Add Todo...'
                name='title'
                value={input.title}
                onChange={handleChange}
            />
            <button className='input-submit'>
                <FaPlusCircle
                    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
                />
            </button>
        </form>
    );
}

export default InputTodo;