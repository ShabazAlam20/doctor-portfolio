import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Services";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import { useState } from "react";
import Services from "./components/Services";

function App() {
  const [nav, setNav] = useState("");
  return (
    <div className="App">
      <div className="flex flex-col">
        <Navbar nav={nav} setNav={setNav} />
        <Home nav={nav} setNav={setNav}/>
        <About />
        <Services />
        <Gallery />
        <Reviews nav={nav} />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
