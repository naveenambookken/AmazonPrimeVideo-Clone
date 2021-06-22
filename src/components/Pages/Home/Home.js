import React from 'react'
// import NavBar from '../../NavBar/NavBar'
import Slider from '../../Banner/Slider'
import RowPost from '../../RowPost/RowPost'
import {Originals,Action,Comedy,Horror,Romance,Documentaries} from '../../../urls';
import SeeMore from '../../Footer/SeeMore'



function Home() {
    return (
        <div>
            <Slider/>
            <RowPost title="Watch next Tv and movies" url={Originals}/>
            <RowPost title="Action" url={Action} small />
            <RowPost title="Comedy" url={Comedy} small />
            <RowPost title="Horror" url={Horror} small />
            <RowPost title="Romance" url={Romance} small />
            <RowPost title="Documentaries" url={Documentaries} small />
            <SeeMore/>
        </div>
    )
}

export default Home
