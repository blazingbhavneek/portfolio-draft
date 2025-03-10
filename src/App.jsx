/* eslint-disable react-refresh/only-export-components */
import {createContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import About from './pages/about';

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Main></Main>}/>
          <Route path="/about" element={<About></About>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
