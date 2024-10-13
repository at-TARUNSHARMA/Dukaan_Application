import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    
    <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount Pending"} ordercount={"13"} amount={"92,312.20"} />
    </div>
  )
}

export default App
