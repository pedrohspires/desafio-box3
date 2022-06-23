import { useEffect, useState } from 'react';
import ContactService from '../../../../services/Contacts.service';
import InsertModal from '../components/Modals/Insert.modal';
import { TableContextProvider } from '../../../../context/Table.context';
import Body from './TableComponents/Body.component';
import Header from './TableComponents/Hader.component';

function Table() {
  const [contacts, setContacts] = useState([]);
  const [insertIsOpen, setInsertIsOpen] = useState(false)
  const token = localStorage.getItem('token');

  async function get(){
    if(contacts.length === 0) {
      const { data } = await ContactService.getAll(token);
      setContacts(data);
    }
  }

  useEffect(() => {
    get();
  }, [])

  async function deleteItem(id){
    await ContactService.deleteId(id, token);
    document.location.reload();
  }

  return (
    <div className="relative w-full h-full shadow-md sm:rounded-lg sm:w-full sm:top-0 sm:overflow-visible ">
      <div className="w-full text-center relative sm:text-right">
        <button className="insert-btn p-2 border-solid rounded righh-0 relative m-8" onClick={() => setInsertIsOpen(true)}>Adicionar contato</button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:mx-auto sm:mt-20 sm:sm:w-11/12">
        <TableContextProvider value={{contacts, setContacts, deleteItem, get}}>
          <Header />
          <Body />
          <InsertModal value={{insertIsOpen, setInsertIsOpen}}/>
        </TableContextProvider>
      </table>
    </div>
  );

}

export default Table;