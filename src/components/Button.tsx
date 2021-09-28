import React from 'react'

type ButtonProps = {
    count: number;
    handleOnClick: React.MouseEventHandler
}

const Button = function(props:ButtonProps){
    return <button onClick={props.handleOnClick}>Clicked {props.count} times</button>
}

export default Button;
