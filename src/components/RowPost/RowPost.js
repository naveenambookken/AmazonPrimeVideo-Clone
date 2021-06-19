import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {posterUrl} from '../../constants/constants'
import axios from '../../axios'
import playbtn from "../Images/playbtn2.png";



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
            {movies.map((itm)=>{
              
              return(
                <div className="poster-content">
                  <img className= "poster" src={posterUrl+itm.poster_path} alt="poster"/>
                  <img className="playbtnimg" src={playbtn} alt="play"/>
                  <div className="poster-view">
                    <p className="movie-name">{itm.title ? itm.title : itm.name}</p>
                    <p className="movie-year">{itm.release_date}</p>
                    <div className="plusbtn"><p className="plusbtntext">+</p></div>
                  </div>
                </div>
            
            )}
            )}    
                
                
            </div>

        </div>
        
    )
}

export default RowPost
