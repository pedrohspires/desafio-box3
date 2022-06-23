import Modal from 'react-modal';

function OptionsModal(props){
  const {optionsMobileIsOpen, setOptionsMobileOpen, setDeleteModalIsOpen, setEditModalIsOpen, setCallIsOpen} = props.value;

  return (
    <Modal 
      isOpen={optionsMobileIsOpen} 
      onRequestClose={() => setOptionsMobileOpen(false)}
      className={"Delete__Modal text-white w-3/6 h-1/4 bg-[#5d737e] grid place-items-center rounded-md"}
      overlayClassName={"w-full h-full absolute grid place-items-center p-8"}
      style={{}}
      closeTimeoutMS={300}
    >
      <div className={`w-full h-full sm:w-full sm:bg-white sm:grid sm:place-items-center2 sm:relative z-10`}>
        <ul className={`w-full h-full grid place-items-center sm:absolute sm:bg-white sm:w-full sm:overflow-hidden ease-in-out duration-300 z-10 sm:h-28`}>
          <li className="w-full h-full border-solid border-b-2 grid place-items-center sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setEditModalIsOpen(true); setOptionsMobileOpen(false)}}>
            Editar
          </li>
          <li className="w-full h-full border-solid border-b-2 grid place-items-center sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setCallIsOpen(true); setOptionsMobileOpen(false)}}>
            Ligar
          </li>
          <li className="w-full h-full border-solid grid place-items-center sm:h-8 sm:m-1 sm:grid sm:place-items-center sm:cursor-pointer" onClick={() => {setDeleteModalIsOpen(true); setOptionsMobileOpen(false)}}>
            Deletar
          </li>
        </ul>
      </div>
    </Modal>
  )
}

export default OptionsModal;