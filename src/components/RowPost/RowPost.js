import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {posterUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import playbtn from "../Images/playbtn2.png";
import Popup from '../Popup/Popup';
import YouTube from 'react-youtube'


function RowPost(props) {
const [movies, setMovies] = useState([])
const [toplay, setToplay] = useState(false)
const [ytbUrl, setytbUrl] = useState()

useEffect(() => {
      axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      
    })
        
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

let playVideo=(id)=>{
setToplay(true);
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setytbUrl(response.data.results[0])
  }else{
    alert("Trailer not available")
  }
})

}
const opts = {
  height: '500vh',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

let _onReady=(event)=> {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}
  
    
    return (
      <div className="mainsection">
        <div className='row'>
            <h5>{props.title}</h5>
            <div className="posters"  >
            {movies.map((itm,k)=>{
              
              return(
                <div className="poster-content">
                  <img className= "poster" src={posterUrl+itm.poster_path} alt="poster"/>
                  <img onClick={()=>playVideo(itm.id)} className="playbtnimg" src={playbtn} alt="play"/>
                  <div className="poster-view">
                    <p className="movie-name">{itm.title ? itm.title : itm.name}</p>
                    <p className="movie-year">{itm.release_date}</p>
                    <div  className="plusbtn"><p className="plusbtntext">+</p></div>
                  </div>
                </div>
            
            )}
            )}    
                
                
            </div>
            

        </div>
        <div className="popupwindow">
        {ytbUrl && <Popup trigger={toplay} setTrigger={setToplay} >
                          <YouTube videoId={ytbUrl.key} opts={opts} onReady={_onReady} /> 
                       </Popup>
            }
        </div>
        </div>
        
    )
}

export default RowPost
