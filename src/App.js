import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Reviews />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
