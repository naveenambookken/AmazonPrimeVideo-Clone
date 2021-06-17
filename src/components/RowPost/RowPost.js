import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {posterUrl} from '../../constants/constants'
import axios from '../../axios'


function RowPost(props) {
const [movies, setMovies] = useState([])

useEffect(() => {
      axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      
    })
        
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  
    
    return (
        <div className='row'>
            <h5>{props.title}</h5>
            <div className="posters"  >
            {movies.map((itm)=>
            <img className={props.small ? "smallposter" : "poster"} src={posterUrl+itm.backdrop_path} alt="poster"/>
            )}    
                
                
            </div>

        </div>
        
    )
}

export default RowPost
