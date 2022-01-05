import './App.css';
import Home from './Pages/Home'
import NavBar from './Components/navBar';
import HeroSection from './Components/heroSection';
import Habilidades from './Components/habilidades';
 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <HeroSection/> 
      <Habilidades/>
    </div>
  )
}

export default App;
