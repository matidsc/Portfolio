import './App.css';
import NavBar from './Components/navBar';
import HeroSection from './Components/heroSection';
import Habilidades from './Components/habilidades';
import Footer from './Components/footer';
import Proyectos from './Components/proyectos'
import About from './Components/about'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/> 
      <Habilidades/>
      <Proyectos/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;
