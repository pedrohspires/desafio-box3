import { useContext } from 'react';
import HomeContext from '../../../context/Home.context';
import Menu from './components/Menu.component';
import Profile from './components/Profile.component';
import './css/Sidebar.css';

function Sidebar() {
  const { showingSidebar } = useContext(HomeContext);

  return (
    <div className={`sidebar h-1/4 relative sm:h-full ease-in-out duration-300 sm:inline-block
                    ${showingSidebar ? "h-1/4 sm:w-1/4" : "h-0 sm:w-14"}`}>
      <Profile />
      <Menu />
    </div>
  )
}

export default Sidebar;