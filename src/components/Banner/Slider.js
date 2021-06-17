import React, { useEffect, useState } from "react";

import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'




function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderImagee, setsliderImagee] = useState([])


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      setsliderImagee([...response.data.results])
      console.log(sliderImagee);
    })
        
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const len = sliderImagee.length - 1;

  return (
    <div className="slider-container">
      
      <section>
      {sliderImagee.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={imageUrl+slide.backdrop_path} alt="" />
          <h2 className="slide-title">{slide.name ? slide.name : slide.title}</h2>
          <h5 className="slide-text">{slide.overview}</h5>
        </div>
      ))}
      </section>


      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImagee}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
