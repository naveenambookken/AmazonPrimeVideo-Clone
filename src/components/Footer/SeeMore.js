import React from 'react'
import './SeeMore.css'

function SeeMore() {


   let scrollToTop=()=> {
        // Scroll to top logic
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }


    return (
        <div>
        <div className="seemore">
            <p className="seemore-text">see more</p>
        </div>
        <div className="backtotop" onClick={scrollToTop}>
            <p className="backtotop-text">Back to top</p>
        </div>
        <div className="footer">

        </div>
        </div>
    )
}

export default SeeMore
