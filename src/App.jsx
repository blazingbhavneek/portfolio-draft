import {useState, createContext, useRef} from 'react';
import Navbar from './components/navbar';
import Menu from './components/menu';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';

export const AppContext = createContext();

function App() {
  const [menuOpen, toggleMenu] = useState(false);
  const projRef = useRef(null);
  const contRef = useRef(null);
  const refList = [
    {name: "Projects", refvar: projRef},
    {name: "Contact", refvar: contRef}
  ]
  return (
    <AppContext.Provider value={{menuOpen, toggleMenu}}>
      <Navbar refArray = {refList}> </Navbar>
      {menuOpen ? <Menu refArray = {refList}></Menu> : null}
      <Hero></Hero>
      <Projects targetRef={projRef}></Projects>
      <Contact targetRef={contRef}></Contact>
    </AppContext.Provider>
  )
}

export default App
