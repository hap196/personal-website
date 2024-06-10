import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialSidebar from "./components/SocialSidebar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Navbar />
        <SocialSidebar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
