import './App.css';
import NavBar from './components/NavBar/NavBar'
import Slider from './components/Banner/Slider'
import RowPost from './components/RowPost/RowPost'
import {Originals,Action,Comedy,Horror,Romance,Documentaries} from './urls';
import SeeMore from './components/Footer/SeeMore'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slider/>
      <RowPost title="Watch next Tv and movies" url={Originals}/>
      <RowPost title="Action" url={Action} small />
      <RowPost title="Comedy" url={Comedy} small />
      <RowPost title="Horror" url={Horror} small />
      <RowPost title="Romance" url={Romance} small />
      <RowPost title="Documentaries" url={Documentaries} small />
      <SeeMore/>
    </div>
  );
}

export default App;
