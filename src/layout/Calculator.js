import React from 'react';
import Button from '../components/button/button';
import Input from '../components/input/input';


const calculator = (props) => {
    return <div>
        <Input />
        <Button color="blue">1</Button>
        <Button color="red">2</Button>
    </div>
}

export default calculator;