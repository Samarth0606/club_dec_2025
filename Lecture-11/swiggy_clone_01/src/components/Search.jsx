import React from 'react'

function Search({setAllRestArr,restArray}) {

    function handleRestSearch(searchedText){
        let searched = restArray.filter((rest)=>rest.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        setAllRestArr( searched )
    } 

  return (
    <div>
        <input placeholder='Search here...' type="text" onChange={(e)=>handleRestSearch(e.target.value)} />
    </div>
  )
}

export default Search