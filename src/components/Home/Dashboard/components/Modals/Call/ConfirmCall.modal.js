import Modal from 'react-modal';

function CallModal({value}){
  const { callConfirmed, setCallConfirmed, setConfirmed, setInLoad, setCallIsOpen, nome } = value;

  if(!callConfirmed)
    return (
      <Modal 
        isOpen={!callConfirmed}
        className={"Call__Modal text-white h-1/3 bg-[#5d737e] grid place-items-center p-8 rounded-md"}
        overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
        style={{}}
        closeTimeoutMS={300}
      >
        <h1>Ligar para {nome}</h1>
        <div className="w-full text-center">
          <button onClick={() => setCallConfirmed(true)} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ligar</button>
          <button onClick={() => {
            setConfirmed(false); 
            setInLoad(true); 
            setCallIsOpen(false);
          }} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
        </div>
      </Modal>
    )
}

export default CallModal