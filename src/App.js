import './App.css';
import ship1 from "./assets/ship1.jpg"
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Register from './form/Register'; 
import {Route, Routes} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
       <Navbar />
      <Hero imageSrc={ship1} />
      <Slider
        imageSrc={ship2}
        title={"Dependable Shipping."}
        subtitle={
          "At Good Will Cargo, we offer tailored alternatives for the movement…"
        }
      />
      <Slider
        imageSrc={ship3}
        title={"Fast Shipping."}
        subtitle={"Good Will Cargo delivers fast, safe and sound sea cargo solutions.."}
        flipped={true}
      />
      <Routes>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
