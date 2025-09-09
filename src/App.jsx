import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileNavbar } from './components/MobileNavbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import "./index.css"
import { Contact } from './components/sections/Contact';
import { AnimatedBg } from './components/AnimatedBg';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <AnimatedBg />
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
  </>;
}

export default App;
