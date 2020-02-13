import React from 'react';
import './button.css'

const button = (props) => {
    const classes = ["number-button"]
    if (props.color === "red")
        classes.push("color-danger")
    else if (props.color === "blue")
        classes.push("color-primary")
    return <button className={classes.join(" ")}>
        {props.children}
    </button>
}

export default button;