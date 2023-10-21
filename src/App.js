import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState("");
  return (
    <div className="App">
      <div className="flex flex-col">
        <Navbar nav={nav} setNav={setNav} />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Reviews nav={nav}/>
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
