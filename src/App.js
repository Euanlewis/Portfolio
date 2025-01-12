import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Uniprojects from "./components/Uniprojects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Uniprojects />
      <Contact />
    </div>
  );
}

export default App;
