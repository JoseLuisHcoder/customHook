import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hook/useFetch'

function App() {
  
  const response = useFetch('https://restcountries.com/v3.1/lang/spa')
  const users = useFetch('https://randomuser.me/api/?results=20')

  console.log(users?.results);
  return (
    <div className="App">
    
    </div>
  )
}

export default App
