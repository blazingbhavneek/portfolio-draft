/* eslint-disable react-refresh/only-export-components */
import {createContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import About from './pages/about';
import Projects from './pages/projects';

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Main></Main>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/projects" element={<Projects></Projects>}/>
        </Routes>
      </Router>
      <footer className="w-full text-center py-1 bg-gray-100 text-gray-600">
        <p>
          Made with ❤️ using <span> </span>
          <a href="https://github.com/blazingbhavneek/portfolio-draft" target="_blank" rel="noopener noreferrer" className="underline">
            React!
          </a>
        </p>
        <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer" className="underline">
          Icons by Lordicon.com
        </a>
      </footer>
    </AppContext.Provider>
  )
}

export default App
