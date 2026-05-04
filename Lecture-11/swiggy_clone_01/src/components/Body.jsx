import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in Chhindwara</h1>
    
        <button className='border rounded w-1/12 m-2 ml-12 p-2'>Rating 4.4+</button>
        <button className='border rounded w-1/12 ml-20 p-2'>Reset</button>

        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body