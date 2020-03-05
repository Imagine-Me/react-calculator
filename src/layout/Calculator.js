import React from 'react';
import Button from '../components/button/button';
import Input from '../components/input/input';
import classes from './calculator.module.css';


class Calculator extends React.Component {
    // INITIALIZING THE STATE
    state = {
        answer: null,
        first_number: null,
        operator: null
    }

    clickHandler = (event) => {
        const val = event.target.innerText
        // Check whether it is a number or not
        if (/^\d+$/.test(val)) {
            if (this.state.operator === null) {
                this.setState({ first_number: this.state.first_number === null ? val : this.state.first_number + val })
            } else {
                this.setState({ answer: this.state.answer === null ? val : this.state.answer + val })
            }
        } else {

            if (val === "+" || val === "-" || val === "/" || val === "*") {
                if(this.state.operator !== null)
                    this.calculate()
                this.setState({ operator: val })
            } else if (val === "=") {
                this.setState({operator: "="})
                this.calculate()
            } else {
                this.setState({ answer: null, first_number: null, operator: null })
            }
        }
    }

    calculate = () => {
        switch (this.state.operator) {
            case '+': this.setState({ operator: null, first_number: parseInt(this.state.answer) + parseInt(this.state.first_number), answer: null });break;
            case '/': this.setState({ operator: null, first_number: parseInt(this.state.answer) / parseInt(this.state.first_number), answer: null });break;
            case '-': this.setState({ operator: null, first_number: parseInt(this.state.answer) - parseInt(this.state.first_number), answer: null });break;
            case '*': this.setState({ operator: null, first_number: parseInt(this.state.answer) * parseInt(this.state.first_number), answer: null });break;
            default: console.log("Invalid operation")
        }
    }

    render() {
        return <div className={classes.Calculator}>
            <Input value={this.state.answer || this.state.first_number || 0} />
            <div className={classes.ButtonGroup}>
                <Button click={this.clickHandler}>9</Button>
                <Button click={this.clickHandler}>8</Button>
                <Button click={this.clickHandler}>7</Button>
                <Button click={this.clickHandler}>CLR</Button>
                <Button click={this.clickHandler}>6</Button>
                <Button click={this.clickHandler}>5</Button>
                <Button click={this.clickHandler}>4</Button>
                <Button click={this.clickHandler}>/</Button>
                <Button click={this.clickHandler}>3</Button>
                <Button click={this.clickHandler}>2</Button>
                <Button click={this.clickHandler}>1</Button>
                <Button click={this.clickHandler}>*</Button>
                <Button click={this.clickHandler}>0</Button>
                <Button click={this.clickHandler}>=</Button>
                <Button click={this.clickHandler}>+</Button>
                <Button click={this.clickHandler}>-</Button>
            </div>
        </div>
    }
}

export default Calculator;