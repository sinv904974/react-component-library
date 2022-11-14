import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <h1 className={styles.header}>About</h1>
            <p className={styles.para}>References are listed below:</p>
            <h2 className={styles.componentName}>Todo List</h2>
            <p className={styles.reference}>React Tutorial From Scratch: A Step-by-Step Guide (2021)</p>
            <p className={styles.reference}>https://ibaslogic.com/react-tutorial-for-beginners/</p>
        </div>
    );
}
export default About;