import { useState } from 'react'
import './App.css'
import ProductTab from './ProductTab'
import Button from './Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <h1>Blockbuster Deals | Shop Now</h1>
        <ProductTab></ProductTab>
    </>
  )
}

export default App
