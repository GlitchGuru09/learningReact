import { useState } from 'react'

function App() {
  const [color, setColor]= useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{background: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={ () => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'red'}}>
            Red
          </button>
          <button onClick={ () => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'blue'}}>
            blue
          </button>
          <button  onClick={ () => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'green'}}>
            green
          </button>
          <button onClick={ () => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'orange'}}>
            orange
          </button>
          <button onClick={ () => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'yellow'}}>
            yellow
          </button>
          <button onClick={ () => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'black'}}>
            black
          </button>
          <button onClick={ () => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: 'purple'}}>
            purple
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default App
