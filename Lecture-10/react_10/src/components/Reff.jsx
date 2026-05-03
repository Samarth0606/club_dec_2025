import React, { useEffect, useRef } from 'react'

function Reff() {
    // let salary = 200000;
    const spanEl = useRef(200000);
    console.log(spanEl.current , "see here");
    
    useEffect(()=>{
        setTimeout(()=>{
            // document.getElementById('salaryy').innerHTML = "50000"
            // console.log(spanEl.current.innerHTML = "50000"); 
            spanEl.current.innerHTML = "50000"; 
        }, 3000)
    }, [])

  return (
    <div>
        <h1>Salary is <span ref={spanEl}>{spanEl.current}</span> </h1>
    </div>
  )
}

export default Reff