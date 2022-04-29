import React, { useState } from 'react';

  // Classes have their own way of using hooks equivalents. Can't use hooks
  // class App extends React.Component {
  //   useState
  // }

function App() {

  //#region Top level explanation
  // Hooks must be top level elements. Cannot be in an if, a function or anything. It will error
  // if (true) {
  //   useState();
  // }
  //#endregion

  //#region  standard useState()
  // const [arr] = useState(4)  No onr does this because useState will only return an array of two.
  //instead we destructure this inline: 1st: variable holding current state, 2nd function to update state
  //const [count, setCount ] = useState(4) // default state to 4.
  //#endregion

  //#region Controlling #times default of useState is run.
      // this is default state is ran every time we run our function. Be careful around complex math. 
      // The function version below is runs only THE FIRST TIME the component renders.
  // const [count, setCount ] = useState(() => {
  //   console.log('run function')
  //   return 4
  // }) 
  
    //Function inside useState() default will run every time it is rendered
  //   function countInitial(){
  //     console.log('run function')
  //     return 4
  //   }

  // const [count, setCount ] = useState(countInitial()) 
  //#endregion

 //#region Controlling the increment in multiple lines:
  // Better way to setCount by taking in the previous count
  // function decrementCount(){
  //   setCount(count -1)
  //   setCount(count -1)  // This will still only decrese by one... 
  //      //Because the count value is the count when we rendered our function
  // }
  // function decrementCount(){
  //   setCount(prevCount => prevCount - 1)
  //   // setCount(prevCount => prevCount - 1) // now we properly decrease by two! 
  // }

  // function incrementCount(){
  //   setCount(prevCount => prevCount - 1)
  // }
//#endregion

  //#region Use state when dealing with objects
  // const [state, setState ] = useState( {count: 4, theme: 'blue'}) 
  // const count = state.count 
  // const theme = state.theme

  //   function decrementCount(){
  //   setState(prevState => {
  //     // Note here the theme dissapears!
  //     // it doesn't merge our theme of blue with the new count. It overrites all our old state
  //     // return {count : prevState.count - 1}
  //     //Instead we spread out our previous state
  //     return {...prevState, count : prevState.count - 1}
  //   })
  // } 
  //   function incrementCount(){
  //   setState(prevState => {
  //     return {...prevState, count : prevState.count + 1}
  //   })
  // }
  //#endregion

  //#region Standard use of multiple setStates
  // using two different hooks means we don't worry about our states clashing
const [count, setCount] = useState(4)  
const [theme, setTheme] = useState('blue')

function decrementCount() {
  setCount(prevCount => prevCount -1)
  if (count%2 === 1) {
    setTheme('blue')    
  }
  else {
    setTheme('red') 
  }
}
function incrementCount() {
  setCount(prevCount => prevCount +1)
  if (count%2 === 1) {
    setTheme('blue')    
  }
  else {
    setTheme('red') 
  }
}
//#endregion

  return (
     <>
      {/* Use onclick in html to call functions  */}
      <button onClick={decrementCount}>-</button> 
      <span>{count}</span>  {/*use {} to embed javascript in html, also inline comments! weird*/}
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
     </>
  );
}

export default App;
