import React, { useEffect, useState } from 'react'
import './Tvshows.css'
import RowPost from '../../RowPost/RowPost'
import axios from '../../../axios'
import {API_KEY} from '../../../constants/constants'
import SeeMore from '../../Footer/SeeMore'

function Tvshows() {
    const [genre, setGenre] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`).then((response)=>{
        setGenre(response.data.genres)

        
      })
          
    }, [])

    const tvshowsapi=`http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=`
    return (
        <div className="tvshow">
            <h1>Tv Shows</h1>
            
            {genre.map((itm)=>{
                return(
                    <div>
                        <RowPost title={itm.name} url={tvshowsapi+itm.id}/>
                    </div>
                )
            })}
            <SeeMore/>
        </div>
    )
}

export default Tvshows
