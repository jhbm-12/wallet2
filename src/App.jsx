import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/Logo.svg';
import LogoGali from './assets/logo-gali.png';

function App() {
  const [count, setcount] = useState(0)
  
  return (
  
      <div className='min-h-screen bg-zinc-950 text-white p-6'>
       <div className='max-w-5xl mx-auto'>
        <header className='flex items-center mb-6 gap-6 justify-between'>
         <img src={Logo} width={170}/>
         <img src={LogoGali} width={260}/>
        </header>
       </div>
      </div>
     
  
  )
}


export default App
