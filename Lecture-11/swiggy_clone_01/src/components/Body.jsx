import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {

    let restArray = ApiCalling()

  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in Chhindwara</h1>
    
        <button  className='border rounded w-1/12 m-2 ml-12 p-2'>Rating 4.3+</button>
        <button  className='border rounded w-1/12 ml-20 p-2'>Reset</button>

        <div className='flex flex-wrap w-10/12 m-auto'>
           <RestaurantCard restArray={restArray} />
        </div>
    </div>
  )
}

export default Body