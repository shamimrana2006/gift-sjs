import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hei meri jan</h1>
      <h1 className='red'>I love you</h1>
    </>
  )
}

export default App
