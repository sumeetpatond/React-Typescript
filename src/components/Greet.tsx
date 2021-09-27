import React from "react"

type GreetProps = {
    name?: string;
    isLoggedIn: boolean;
}

const Greet = function(props: GreetProps) {
    return (
            <h1>{props.isLoggedIn? `Hello ${props.name}`: 'Welcom Guest'}</h1>
    )
}

export default Greet;
