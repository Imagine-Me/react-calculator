import React from 'react';
import classes from './input.module.css';

const input = (props) => {
    const styles = [classes.Input,classes.ColorPrimary]
    return <input className={styles.join(" ")} type="text" value={props.value} readOnly />
}

export default input;