import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Header title="Saurabh1"></Header>
      <Header title="Saurabh2"></Header>
      </div>
  )

  function Header({title}){
    return <div>
      {title}
    </div>
  }
}

export default App
