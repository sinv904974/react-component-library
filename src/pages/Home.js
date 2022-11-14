import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h1 className={styles.header}> Welcome to my React Components Library </h1>
            <p className={styles.para}>This react app is created for practice and reference purposes.</p>
        </div>
    );
};

export default Home;