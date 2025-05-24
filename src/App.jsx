import React from 'react'
import Search from './components/Search.jsx'
import { useState } from 'react'

function App() {

  const [searchTerm, setSearchTerm] = useState('Naruto')

  return (
    <main>
      <div className='pattern'></div>  
      
      <div className='wrapper'>
        <header>
          <img src="./public/hero-img.png" alt="Hero Image" />
          <h1> Find <span className='text-gradient'>Movies</span> You Want Bro!</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
        </main>
    
  )
}

export default App