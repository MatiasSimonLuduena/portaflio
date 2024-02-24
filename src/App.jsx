import { useRef, useState, useEffect } from "react"

// components
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function hundleSroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeRef.current.offsetTop &&
        scrollPosition < projectsRef.current.offsetTop - 250
      ) {
        setCurrentSection('home');
      } else if (
        scrollPosition > projectsRef.current.offsetTop - 250 &&
        scrollPosition < aboutRef.current.offsetTop - 250
      ) {
        setCurrentSection('projects');
      } else if (
        scrollPosition > aboutRef.current.offsetTop - 250 &&
        scrollPosition < contactRef.current.offsetTop - 250
      ) {
        setCurrentSection('about');
      } else {
        setCurrentSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        hundleSroll={hundleSroll} currentSection={currentSection}
        homeRef={homeRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}
      />
      <Home homeRef={homeRef}/>
      <Projects projectsRef={projectsRef}/>
      <About aboutRef={aboutRef}/>
      <Contact contactRef={contactRef}/>
    </>
  )
}

export default App
