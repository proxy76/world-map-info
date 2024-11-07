import { useState } from 'react'
import WorldMap from './components/Map'
import './styles/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <WorldMap />
    </div>
  )
}

export default App
