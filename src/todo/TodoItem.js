import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { id, title, completed } = props.todo;

    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
    }

    const updateTitle = (e) => {
        if (e.key === 'Enter') {
            setEditing(false);
        }
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...");
        }
    }, []);

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    className={styles.checkbox}
                    type='checkbox'
                    checked={completed}
                    onChange={() => props.onChange(id)}
                />
                <button onClick={() => props.deleteTodo(id)}>
                    <FaTrash
                        style={{ color: "orangered", fontSize: "16px" }}
                    />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input
                className={styles.textInput}
                style={editMode}
                type='text'
                value={title}
                onChange={e => {
                    props.editTitle(e.target.value, id);
                }}
                onKeyDown={updateTitle}
            />
        </li>
    );
}

export default TodoItem;