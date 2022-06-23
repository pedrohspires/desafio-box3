import { useState } from 'react';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import Modal from 'react-modal';
import ContactService from '../../../../../services/Contacts.service';
import Call from '../Modals/Call/Call';
import DeleteModal from '../Modals/Delete.modal';
import EditModal from '../Modals/Edit.modal';
import OptionsModal from '../Modals/Options.modal';

Modal.setAppElement('#root');
function Row({ value }){
  const token = localStorage.getItem('token');
  const { id, nome, telefone, email, ativo, dataNascimento } = value;
  const [optionsIsOpen, setOptionsOpen] = useState(false);
  const [optionsMobileIsOpen, setOptionsMobileOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [callIsOpen, setCallIsOpen] = useState(false);

  async function deleteThisItem(){
    await ContactService.deleteItem(id, token);
    document.location.reload();
  }

  return (
    <tr key={id} className="border-b text-center dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hidden sm:table-cell">
        {id}
      </th>
      <td className="px-6 py-4 flex" onClick={() => {if(document.width <= 640) setOptionsMobileOpen(true)}}>
        <div className="avatar rounded-full bg-white w-8 h-8 grid place-items-center sm:hidden">
          {nome[0]}
        </div>
        <div className="grid place-items-center ml-4 sm:ml-0 sm:w-full">
          {nome}
        </div>
      </td>
      <td className="px-6 py-4 hidden sm:table-cell">
        {telefone}
      </td>
      <td className="px-6 py-4 hidden sm:table-cell">
        {email}
      </td>
      <td className="px-6 py-4 hidden sm:table-cell">
        {ativo ? "Online" : "Offline"}
      </td>
      <td className="px-6 py-4 hidden sm:table-cell sm:relative">
        <div className="drop-icon w-full grid place-items-center cursor-pointer" onClick={() => setOptionsOpen(!optionsIsOpen)}>
          <MdOutlineArrowDropDownCircle size={21}/>
        </div>
        <div className={`sm:w-full sm:bg-white sm:grid sm:place-items-center2 sm:relative`}>
          <ul className={`sm:bg-[#5d737e] sm:text-white sm:absolute sm:bg-white sm:w-full sm:overflow-hidden ease-in-out duration-300 z-10 ${!optionsIsOpen ? "sm:h-0" : "sm:h-28"}`}>
            <li className="sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setEditModalIsOpen(true); setOptionsOpen(false)}}>
              Editar
            </li>
            <li className="sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setCallIsOpen(true); setOptionsOpen(false)}}>
              Ligar
            </li>
            <li className="sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setDeleteModalIsOpen(true); setOptionsOpen(false)}}>
              Deletar
            </li>
          </ul>
        </div>
      </td>

      <Call value={{callIsOpen, setCallIsOpen, id, nome}}/>
      <OptionsModal value={{optionsMobileIsOpen, setOptionsMobileOpen, setDeleteModalIsOpen, setEditModalIsOpen, setCallIsOpen}} />
      <EditModal value={{editModalIsOpen, setEditModalIsOpen, id, nome, telefone, email, ativo, dataNascimento}} />
      <DeleteModal value={{deleteModalIsOpen, setDeleteModalIsOpen, deleteThisItem, nome}}/>
    </tr> 
  )
}

export default Row;