import { useContext } from 'react';
import Modal from 'react-modal';
import TableContext from '../../../../../context/Table.context';
import ContactService from '../../../../../services/Contacts.service';
import './css/InsertModal.css';

function InsertModal({value}){
  const { insertIsOpen, setInsertIsOpen } = value;
  const { get } = useContext(TableContext);

  async function insertItem(event){
    event.preventDefault();
    const target = event.target;
    const token = localStorage.getItem('token')
    const nome = target.nome.value, telefone = target.telefone.value, email = target.email.value, data = target.data.value; 
    const response = await ContactService.post('/api/Contato', token, [nome, telefone, email, data]);
    if(response.status === 200) {
      get();
      document.location.reload()
    }
  }

  return (
    <Modal
      className={"w-5/6 h-full absolute right-0 grid place-items-center bg-[#5d737e] p-3 m-0 sm:w-1/3 sm:p-0"}
      overlayClassName={"w-full h-full absolute"}
      isOpen={insertIsOpen} 
      onRequestClose={() => setInsertIsOpen(false)} 
      style={{}}
      closeTimeoutMS={300}
      >
      
      <div className="modal-container w-full p-3">
        <form onSubmit={insertItem}>
          <div className="mb-6">
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
            <input type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seu Nome" name="nome" required />
          </div>
          <div className="mb-6">
            <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefone</label>
            <input type="text" id="telefone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(00) 00000-0000" name="telefone" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="seuemail@email.com" name="email" required />
          </div>
          <div className="mb-6 sm:w-1/2">
            <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data de Nascimento</label>
            <input type="date" id="data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="data" required />
          </div>

          <div className="w-full text-right">
            <button type="submit" className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enviar</button>
            <button onClick={() => setInsertIsOpen(false)} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default InsertModal;