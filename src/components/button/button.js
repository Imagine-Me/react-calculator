import React from 'react';
import classes from './button.module.css';

const button = (props) => {
    return <button className={classes.NumberButton}>
        {props.children}
    </button>
}

export default button;