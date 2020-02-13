import React from 'react';
import Button from '../components/button/button';
import Input from '../components/input/input';
import classes from './calculator.module.css';


const calculator = (props) => {
    return <div className={classes.Calculator}>
        <Input />
        <div className={classes.ButtonGroup}>
            <Button>9</Button>
            <Button>8</Button>
            <Button>7</Button>
            <Button>CLR</Button>
            <Button>6</Button>
            <Button>5</Button>
            <Button>4</Button>
            <Button>/</Button>
            <Button>3</Button>
            <Button>2</Button>
            <Button>1</Button>
            <Button>*</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>+</Button>
            <Button>-</Button>
        </div>
    </div>
}

export default calculator;