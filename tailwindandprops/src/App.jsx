import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
   let userprofile = {
    linkedin : "https://www.linkedin.com/in/piyush-vyas-1b0a5b1b6/"}

   
  return (
    <>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card  name="Piyush vyas" userdetails={userprofile} />
    </div>
    </>
  )
}

export default App
