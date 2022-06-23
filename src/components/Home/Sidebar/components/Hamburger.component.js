import { useContext } from 'react';
import HomeContext from '../../../../context/Home.context';

function Hamburger(){
  const { showingSidebar, setShowingSidebar } = useContext(HomeContext);
  
  return (
    <button className="space-y-1" onClick={() => setShowingSidebar(!showingSidebar)}>
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </button>
  )
}

export default Hamburger;