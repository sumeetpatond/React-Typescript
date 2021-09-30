import React, { useReducer } from "react";

type StateType = {
    counter : number;
}
type UpdateActionType = {
    type : 'Increment' | 'Decrement';
    payload: number;
}
type ResetActionType = {
    type : 'Reset';
}
type ActionType = UpdateActionType | ResetActionType;

const initialState:StateType = {
    counter: 0
}

const Reducer = function(state:StateType, action:ActionType){
    switch(action.type){
        case 'Increment':
            return {...state, counter : state.counter + action.payload}
        case 'Decrement':
            return {...state, counter : state.counter - action.payload}
        case 'Reset':
            return {...state, counter : initialState.counter}
        default:
            return state
    }
}

const Counter = function(){

    const [state, dispatch]=useReducer(Reducer, initialState)
    const handleAdd = function() {
        dispatch({type:'Increment', payload:10})
    }
    const handleSubtract = function() {
        dispatch({type:'Decrement', payload:10})
    }
    const handleReset = function(){
        dispatch({type:'Reset'})
    }
    return (
        <div>
            <button onClick={handleAdd}>Add 10</button>
            {state.counter}
            <button onClick={handleSubtract}>Subtract 10</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;
