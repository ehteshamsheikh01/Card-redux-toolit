import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Component/Navbar'
import { addCarditems } from '../Config/reducers/CardSlice'

const App = () => {


const [products , setProduct] =useState(null)



//selector
const selector = useSelector( state => state.card.Carditems)
console.log(selector);


//dispatch
const dispatch = useDispatch()




useEffect(()=>{

     fetch('https://dummyjson.com/products')
     .then(res => res.json())
     .then(res =>{
      setProduct(res.products)
     })
     .catch(err => console.log(err))
} , [])

const enterbtn =(item) =>{
  dispatch(addCarditems({
    item
  }))
}



  return (
  <>
  <h1>Card</h1> 
  <Navbar/>
  <div className='flex justify-center mt-5 flex-wrap '>
   {products ? products.map((item )=>{
    return <div className=' border-2px p-2 border-radius ' key={item.id}>
    
    <img width="200" src={item.thumbnail} alt="producting" />
    <h2>{item.title.slice(0 , 10) + "..."}</h2>
    <h2>{item.price}</h2>
    <button onClick={()=>enterbtn(item)} className='btn btn-primery'>Add to card</button>
    </div>
   }) : <p>loading...</p>}
  </div>
  </>
  )
}

export default App
