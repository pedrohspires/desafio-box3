import { AiOutlineContacts, AiOutlinePhone } from 'react-icons/ai';
import HomeContext from '../../../../context/Home.context'
import { useContext } from 'react'
import Hamburger from '../components/Hamburger.component';

function Menu() {
  const { showingSidebar } = useContext(HomeContext);

  return (
    <div className={`menu-container w-full h-8 absolute sm:static sticky top-0 sm:h-16`}>
      <ul className={`menu-content w-full h-full flex sm:block sm:mt-12`}>
        <li className={`menu-item w-1/3 h-full cursor-pointer grid place-items-center sm:w-full sm:my-0 ease-in-out duration-300`}>
          <AiOutlineContacts size={24} className={`hidden sm:block`}/>
          <span className={`${!showingSidebar ? "sm:hidden" : ""}`}>Contatos</span>
        </li>
        <li className={`menu-item w-1/3 h-full cursor-pointer grid place-items-center sm:w-full sm:my-0 ease-in-out duration-300`}>
          <AiOutlinePhone size={24} className={`hidden sm:block`}/>
          <span className={`${!showingSidebar ? "sm:hidden" : ""}`}>Chamadas</span>
        </li>
        <li className={`menu-item hamburger w-1/5 h-full absolute right-4 grid place-items-center sm:h-8 sm:top-0 sm:right-0 ${!showingSidebar ? "sm:w-full" : "sm:w-12"} ease-in-out duration-300`}><Hamburger /></li> 
      </ul>
    </div>
  )
}

export default Menu;