import Modal from 'react-modal';
import ContactService from '../../../../../services/Contacts.service';

function EditModal({value}) {
  const {editModalIsOpen, setEditModalIsOpen, id, nome, telefone, email, ativo, dataNascimento} = value;

  const date = new Date(dataNascimento);
  const day = date.getDate(), month = date.getMonth(), year = date.getFullYear();
  const dateTemp = `${year}-${month<10 ? '0'+month : month}-${day}`;

  function getValues({target}){
    const { nome, telefone, email, data} = target;
    return { 
      nome: nome.value,
      telefone: telefone.value,
      email: email.value,
      ativo: ativo,
      dataNascimento: data.value
     }
  }

  async function editContact(event){
    event.preventDefault();
    const data = getValues(event);
    const token = localStorage.getItem('token');
    await ContactService.put(id, token, data);
    document.location.reload();
  }

  return (
    <Modal 
      className={"w-5/6 h-full absolute right-0 grid place-items-center bg-[#5d737e] p-3 m-0 sm:w-1/3 sm:p-0"}
      overlayClassName={"w-full h-full absolute"}
      isOpen={editModalIsOpen} 
      onRequestClose={() => setEditModalIsOpen(false)}
      style={{}}
      closeTimeoutMS={300}
    >
      <div className="modal-container w-full p-3">
        <form onSubmit={editContact}>
          <div className="mb-6">
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
            <input type="text" id="nome" defaultValue={nome} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seu Nome" name="nome" required />
          </div>
          <div className="mb-6">
            <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefone</label>
            <input type="text" id="telefone" defaultValue={telefone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(00) 00000-0000" name="telefone" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="seuemail@email.com" name="email" required />
          </div>
          <div className="mb-6 sm:w-1/2">
            <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Data de Nascimento</label>
            <input type="date" id="data" defaultValue={dateTemp} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="data" required />
          </div>

          <div className="w-full text-right">
            <button type="submit" className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enviar</button>
            <button type="button" onClick={() => setEditModalIsOpen(false)} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default EditModal;