import Home from "./home/Home";
import backgroundImage1 from '../assets/images/home/background1.png';
import backgroundImage2 from '../assets/images/home/background2.png';
import Skills from "./skills/Skills";
import About from "./about/About";

function App() {
  return (
    <div className="bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})` }} >
        <Home />
        <About />
        <Skills />
    </div>
  );
}

export default App;
