import './App.css';
import React, { useState } from "react";
import logo from "./components/Images/Logo.png";
import searchbtn from "./components/Images/searchbtn.ico";
import Home from './components/Pages/Home/Home';
import Tvshows from './components/Pages/Tvshows/Tvshows';
import Movies from './components/Pages/Movies/Movies';
import Kids from './components/Pages/Kids/Kids';
import axios from 'axios';
import {API_KEY} from './constants/constants'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchWindow from './components/Pages/SearchWindow/SearchWindow';


function App() {
  const [searchedData, setSearchedData] = useState([])
  const [queryValue, setqueryValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')


let cancelData=''

let fetchSearchResults=()=>{
  if(cancelData){
    cancelData.cancel();
  }
    cancelData=axios.CancelToken.source();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}`,{
      cancelToken: cancelData.token
    }).then((response)=>{
      const resultNotFoundMsg = !response.data.length
				? 'There are no more search results. Please try a new search.'
				: '';


      setSearchedData(response.data.results)
      setMessage(resultNotFoundMsg)
      setLoading(false)
    console.log(response.data.results)
  }).catch((error)=>{
    if (axios.isCancel(error) || error){
      setLoading(false)
      setMessage('Failed to fetch results.Please check network')
    }
  }) 
}

  const query=(e)=>{
    const query=e.target.value;
     setqueryValue(query)
     setLoading(true)
     setMessage('')
    
  }
let searchfind=()=>{
  setLoading(true)
  setMessage("")
  fetchSearchResults()
 
}


  return (
    
     <Router>
       <div>
          <div className="main-body">
            <div className="nav-bar">
              <nav className="navbar navbar-expand-lg navbar-dark bgcolor">
                <div className="prime-logo">
                  <Link to="/AmazonPrimeVideo-Clone">
                    <img className="logo" src={logo} alt="Logo" />
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <div className="nav-primary">
                  <div className="left-section">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="active" aria-current="page" to="/AmazonPrimeVideo-Clone">
                          Home<span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="active" to="/Tvshows">
                          TV Shows
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="active" to="/Movies">
                          Movies
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="active" to="/Kids">
                          Kids
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="right-section">
                    
                    
                    
                    <Link to="/Search">
                    <label>
                      <img className="search-button" onClick={searchfind} src={searchbtn} alt="button" />
                      <input
                        className="search-bar"
                        type="text"
                        placeholder="Search"
                        value={queryValue}
                        aria-label="Search"
                        onChange={query}
                      />
                      </label>  
                    </Link>  
                   



                  </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          </div>
          <div>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/AmazonPrimeVideo-Clone">
                <Home/>
              </Route>
              <Route path="/Tvshows">
                <Tvshows/>
              </Route>
              <Route path="/Movies">
                <Movies/>
              </Route>
              <Route path="/Kids">
                <Kids/>
              </Route>
              <Route path="/Search">
                <SearchWindow array={searchedData} message={message} loading={loading}/>
                 
                  
              </Route>
            </Switch>
         
            </div>
          </Router>
    
  );
}

export default App;
