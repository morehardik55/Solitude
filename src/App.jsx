import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Solitude Frontend Started!</h1>
    </div>
  );
}

export default App
