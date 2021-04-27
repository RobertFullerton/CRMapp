import React from 'react';
import './App.css';



import { Login } from './pages/Login/Login';
import { LogoHeader } from './components/Layout/Default/Default';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { NewClient } from './pages/NewClients/NewClient';

function App() {
  return (
    <div className="App">
        <LogoHeader>
        {/* <Dashboard /> */}
        <NewClient />
        {/* <Login /> */}
      </LogoHeader>
    </div>
  );
}

export default App;
