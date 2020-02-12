import React from 'react';
import Radium from 'radium'

const button = (props) => {
    return <button style={{
        fontSize: '30px',
        padding: '15px',
        width: '22%',
        marginTop: '30px',
        borderRadius: '5px',
        border: 'none',
        ':hover': {
            backgroundColor: 'grey',
            cursor: 'pointer'
        },
        '@media (min-width: 320px)': {
            backgroundColor: 'red'
        }
    }}>
        {props.children}
    </button>

}

export default Radium(button);