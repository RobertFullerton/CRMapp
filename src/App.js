import React from 'react';
import './App.css';



import { Login } from './pages/Login/Login';
import { LogoHeader } from './components/Layout/Default';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
    <LogoHeader>
      <Dashboard />
    </LogoHeader>
    </div>
  );
}

export default App;
