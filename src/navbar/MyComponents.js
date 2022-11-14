import React from 'react';
import { NavLink } from 'react-router-dom';

const components = [
    {
        id: 1,
        path: 'todo',
        name: 'Todo List',
        component: 'TodoContainer'
    }
];

const MyComponents = (props) => {
    return (
        <ul>
            {components.map(component => {
                return (
                    <li key={component.id}>
                        <NavLink
                            to={'/components/' + component.path}
                            onClick={props.closeMenu}
                            className={({ isActive }) => (isActive ? 'active-link' : 'none')}
                        >
                            {component.name}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default MyComponents;