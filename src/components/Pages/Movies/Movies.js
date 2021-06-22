import React, { useEffect, useState } from 'react'
import RowPost from '../../RowPost/RowPost'
import axios from '../../../axios'
import {API_KEY} from '../../../constants/constants'
import SeeMore from '../../Footer/SeeMore'
  

function Movies() {
    const [genre, setGenre] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setGenre(response.data.genres)
        
        
      })
          
    }, [])

    const moviesapi=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`

    return (
        <div className="movies">
            <h1>Movies</h1>
            {genre.map((itm)=>{
                return(
                    <div>
                        <RowPost title={itm.name} url={moviesapi+itm.id}/>
                    </div>
                )
            })}
            <SeeMore/>
        </div>
    )
}

export default Movies
