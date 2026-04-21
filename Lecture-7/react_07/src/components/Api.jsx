import axios from 'axios';
import { useEffect, useState } from 'react';

function Api() {

    const [movie,setMovie] = useState([])

    useEffect(()=>{

        async function calling(){
            const API = "https://api.tvmaze.com/search/shows?q=girls"
            let resp = await axios.get(API) //promise
            console.log(resp.data);
            setMovie(resp.data)
        }
        calling()

    } , [])


  return (
    <div>
        {
            movie.map((item)=>{return(
                <div style={{border:"2px solid black", color:"green"}}>
                    <h1>Movie Name: {item.show.name}</h1>
                    <h1>Movie IMDB: {item.show.rating.average}</h1>
                </div>
            )})
        }
    </div>
  )
}

export default Api