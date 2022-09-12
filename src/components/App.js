import React, { createContext } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

const UserContext = createContext();

const App = () => {

  return (
    <div id="main">
      
        <UserProfile />
      
    </div>
  )
}


export default App;
export {UserContext}
