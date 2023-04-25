// import { useReducer } from 'react';
import React from 'react';
import './style.css';

const reducer = (state,action) => {
  if (action.type === "INCR"){
       state = state + 1;
  }
  if (action.type === "DECR"){
       state = state - 1;
  }
  return state;
}
// const useState = () => {


  const UseReducer = () => {
  const  initialData = 10;
  // const [myNum , setMyNum] = React.useState(initialData);
  const [state, dispatch] = React.useReducer(reducer, initialData);


  return (
    <>
      <div className='center_div'>
        {/* <p>{myNum}</p> */}
        <p>{state}</p>
        <div className='button2'
        //  onClick={() => setMyNum(myNum + 1)}
        onClick={() => dispatch({type:"INCR"})}
         >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
        <div className='button2' 
        // onClick={() => (myNum > 0 ? setMyNum(myNum - 1) :  setMyNum(0))}
        onClick={() => dispatch({type:"DECR"})}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREMENT
        </div>
      </div>
      
    </>
  )
}

export default UseReducer;
