import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Search'

function Body() {

    let restArray = ApiCalling()
    const [allRestArray,setAllRestArr] = useState(restArray)

    useEffect(()=>{
        if(restArray && restArray.length){
            setAllRestArr(restArray)
        }
    }, [restArray])

    function filterTopRatedRest(restArray){
        setAllRestArr(restArray.filter((restaurant)=> restaurant.info.avgRating >= 4.3))
    }
    function resetFilter(){
        setAllRestArr(restArray)
    }

  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in Chhindwara</h1>
    
        <button onClick={()=>filterTopRatedRest(restArray)} className='border rounded w-1/12 m-2 ml-12 p-2'>Rating 4.3+</button>
        <button onClick={()=>resetFilter(restArray)} className='border rounded w-1/12 ml-20 p-2'>Reset</button>
        <div className='mx-10 rounded text-xl'>
            <Search restArray={restArray} setAllRestArr={setAllRestArr} />
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
           <RestaurantCard restArray={allRestArray} />
        </div>
    </div>
  )
}

export default Body