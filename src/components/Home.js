import { useState } from 'react';
import { Navigate } from 'react-router';
import './../css/Home.css';
import { HomeContextProvider } from '../context/Home.context';
import Dashboard from './Home/Dashboard/Dashboard.component';
import Sidebar from './Home/Sidebar/Sidebar.component';

function Home() {
  const [showingSidebar, setShowingSidebar] = useState(false);

  if(!localStorage.getItem('token'))
    return <Navigate to="/login" />

  return (
    <HomeContextProvider value={{showingSidebar, setShowingSidebar}}>
      <div id="Home" className="Home w-screen h-screen absolute inline-block sm:flex">
        <Sidebar />
        <Dashboard />
      </div>
    </ HomeContextProvider>
  );
}

export default Home;
