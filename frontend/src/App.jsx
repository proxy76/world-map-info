import { useState } from 'react'
import './styles/main.scss';
import MainMap from './components/MainMap';
import LandingPage from './components/LandingPage';

function App() {

  return (
    <div className='container'>
      {/* <MainMap /> */}
      <LandingPage />
    </div>
  )
}

export default App
