import { useState } from "react";
import Modal from 'react-modal';
import PhoneService from "../../../../../../services/Phone.service";
import CallModal from './Call.modal';
import '../css/CallModal.css'

// Retorna um modal com a ligação em si
function Call({ value }){
  const { callIsOpen, setCallIsOpen, id, nome } = value;
  const token = localStorage.getItem('token');
  const [confirmed, setConfirmed] = useState(false);
  const [inLoad, setInLoad] = useState(true);
  const [callData, setCallData] = useState([]);

  // Impede requisições desnecessárias
  if(!callIsOpen)
    return (<></>);

  // Existe chamadas em andamento
  if(!confirmed && !inLoad)
    return (
      <Modal 
        className={"Call__Modal text-white h-1/3 bg-[#5d737e] grid place-items-center p-8 rounded-md"}
        overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
        isOpen={!confirmed}
        style={{}}
        closeTimeoutMS={300}
      >
        <h1>Existe uma chamada em andamento com {callData.contato.nome}</h1>
        <button onClick={() => {
          setConfirmed(false); 
          setInLoad(true);
          setCallIsOpen(false);
        }} className="right-0 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Fechar</button>
      </Modal>
    )

  // Finalizou a requisição e não existe chamadas em andamento
  if(confirmed && !inLoad)
    return <CallModal value={{confirmed, setConfirmed, setInLoad, setCallIsOpen, callData, setCallData, id, nome}} />
  
  PhoneService.getCallInProgress(token, setConfirmed, setInLoad, setCallData);
}

export default Call;