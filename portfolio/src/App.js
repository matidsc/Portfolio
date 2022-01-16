import './App.css';
import Home from './Pages/Home'
import NavBar from './Components/navBar';
import HeroSection from './Components/heroSection';
import Habilidades from './Components/habilidades';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <HeroSection/> 
      <Habilidades/>
      <Footer/>
    </div>
  )
}

export default App;
