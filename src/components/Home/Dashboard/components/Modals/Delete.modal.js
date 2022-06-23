import Modal from 'react-modal';
import './css/DeleteModal.css';

function DeleteModal({value}){
  const { deleteModalIsOpen, setDeleteModalIsOpen, deleteThisItem, nome } = value;

  return (
    <Modal 
      className={"Delete__Modal text-white h-1/3 bg-[#5d737e] grid place-items-center p-8 rounded-md"}
      overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
      isOpen={deleteModalIsOpen} 
      onRequestClose={() => setDeleteModalIsOpen(false)}
      style={{}}
      closeTimeoutMS={300}
    >
      <h1>Tem certeza que deseja deletar o contato de {nome}</h1>
      <div className="w-full text-center">
        <button onClick={deleteThisItem} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Deletar</button>
        <button onClick={() => setDeleteModalIsOpen(false)} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Voltar</button>
      </div>
    </Modal>
  );
}

export default DeleteModal;