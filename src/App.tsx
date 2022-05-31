import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StoreProvider from './state/StoreProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StoreProvider>
      <h1>Hello world</h1>
    </StoreProvider>
  )
}

export default App
