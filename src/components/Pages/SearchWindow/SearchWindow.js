import React, { useState } from 'react'
import {posterUrl,API_KEY} from '../../../constants/constants'
import './SearchWindow.css'
import playbtn from '../../Images/playbtn2.png'
import axios from '../../../axios'
import Popup from '../../Popup/Popup';
import YouTube from 'react-youtube'
import Loading from '../../Loading/Loading'


function SearchWindow(props) {
const [toplay, setToplay] = useState(false)
const [ytbUrl, setytbUrl] = useState()

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
        <div className="searchwindow">
            <h5 className="heading-search">Search</h5>
            <div className="searchbody">
              <Loading className={` ${props.loading ? 'show' : 'hide' }`}/>
            {props.array.map((itm,k)=>{
                return(
                    <div className="poster-body">
                  <img className= "poster" src={posterUrl+itm.poster_path} alt="poster"/>
                  <img onClick={()=>playVideo(itm.id)} className="playbtnimg" src={playbtn} alt="play"/>
                  <div className="poster-view">
                    <p className="movie-name">{itm.title ? itm.title : itm.name}</p>
                    <p className="movie-year">{itm.release_date}</p>
                    <div  className="plusbtn"><p className="plusbtntext">+</p></div>
                  </div>
                </div>
                )
            })}
            <div className="popupwindow">
            {ytbUrl && <Popup trigger={toplay} setTrigger={setToplay} >
                            <YouTube videoId={ytbUrl.key} opts={opts} onReady={_onReady} /> 
                        </Popup>
                }
            </div>
            </div>
            { props.message && <p className="message">{props.message}</p> }
            
        </div>
    )
}

export default SearchWindow
