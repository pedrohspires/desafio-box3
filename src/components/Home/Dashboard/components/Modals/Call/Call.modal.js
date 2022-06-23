import { useState } from 'react';
import Modal from 'react-modal';
import PhoneService from '../../../../../../services/Phone.service';
import ConfirmCallModal from './ConfirmCall.modal';
import { FcEndCall } from 'react-icons/fc';

function CallModal({value}){
  const {setConfirmed, setInLoad, setCallIsOpen, callData, setCallData, id, nome } = value;
  const token = localStorage.getItem('token');
  const [callConfirmed, setCallConfirmed] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [hangUpCall, setHangUpCall] = useState(false);

  if(!callConfirmed)
    return (<ConfirmCallModal value={{ callConfirmed, setCallConfirmed, setConfirmed, setInLoad, setCallIsOpen, nome }}/>)

  function hangUpCallStates(){
    if(inCall){
      setInLoad(true);
      setHangUpCall(false);
      setConfirmed(false);
      setCallIsOpen(false);
      setCallData([]);
      setInCall(false);
    }
  }

  if(!inCall) PhoneService.createCall(token, id, setInCall, setCallData);

  return (
    <> 
      <Modal 
        isOpen={!hangUpCall && callConfirmed && inCall}
        className={"Delete__Modal text-white w-5/6 h-3/4 bg-[#5d737e] grid place-items-center p-8 rounded-md"}
        overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
        style={{}}
        closeTimeoutMS={300}
      >
        <h1>Em chamada com:</h1>
        <label>{nome}</label>
        <img className="w-28 h-28 rounded-full" src={require('./imgs/profile.png')} alt="Rounded avatar" />
        <FcEndCall size={"10vh"} onClick={() => setHangUpCall(true)} className={"cursor-pointer"}/>
      </Modal>

      <Modal 
        isOpen={hangUpCall && callConfirmed}
        className={"Delete__Modal text-white text-center w-full sm:w-1/2 h-2/4 bg-[#5d737e] grid place-items-center p-8 rounded-md"}
        overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
        style={{}}
        closeTimeoutMS={300}
      >
        <form className="w-5/6" onSubmit={(event) => PhoneService.hangUpCall(event, token, callData, hangUpCallStates)}>
          <div>
            <label htmlFor="hangUpCall">
              <h1>Assunto da chamada com: {nome}</h1>
            </label>
            <input type="textarea" id="subject" name="hangUpCall" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className="w-full text-center py-3">
            <button type="submit" className="right-0 py-2.5 px-5 sm:mr-2 mb text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Desligar</button>
            <button type="button" onClick={() => setHangUpCall(false)} className="right-0 py-2.5 px-5 sm:ml-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancelar</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CallModal