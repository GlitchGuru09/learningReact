import { useState } from "react"


function App() {
  // const [Switch, setSwitch] = useState(false) // **off=false and on = true** initially the switch is off
  // // if the user click on the toggle the setSwitch methode will make it to !switch (i.e true) 
  // //setSwitch or any other set method replaces the value that is given to him and places it in the state
  // //useState(initialState)
 //set functions, like setSomething(nextState)

  const [Switch, setSwitch] = useState(false)
  function isOnOrOff(){
    setSwitch(!Switch)
  }

  return (
    <>
      <h1>Toggle: {Switch ? 'ON' : 'OFF' }</h1>
      {/* <button onClick={isOnOrOff}>Toggle</button>  */}
      <button onClick={() => setSwitch(!Switch)}>Toggle</button>    
    </>
  )
}

export default App
