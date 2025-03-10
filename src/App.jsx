/* eslint-disable react-refresh/only-export-components */
import {createContext} from 'react';
import Main from './components/main';

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider>
      <Main></Main>
    </AppContext.Provider>
  )
}

export default App
