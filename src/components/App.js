import Home from "./home/Home";
import backgroundImage1 from '../assets/images/home/background1.png';
import backgroundImage2 from '../assets/images/home/background2.png';
import Skills from "./skills/Skills";
import About from "./about/About";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})` }} >
    <div className="bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})` }} >
        <Home />
        <About />
        
    </div>
    <div className="bg-cover bg-center bg-repeat" style={{ backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})` }} >
        <Skills />
        <Projects />
        <Experience />
        <Footer />
    </div>
    </div>
  );
}

export default App;
