import { useState } from "react"


function App() {
  const [name, setName] = useState('')

  return (
    <>
      <input type="text" 
      value={name}
       placeholder="Enter your name:" 
       onChange={ (e) => setName(e.target.value)} />
       <h2>Hello, {name ? name : 'stranger'}</h2>
    </>
  )
}

export default App
