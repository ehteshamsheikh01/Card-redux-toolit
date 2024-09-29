import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {


    const selector = useSelector(state => state.card.Carditems)
    console.log(selector);
    
  return (
  <>
  <div>
  <h1>product</h1>
  <h2>card{selector.length}</h2>
  </div>
  </>
  )
}

export default Navbar
