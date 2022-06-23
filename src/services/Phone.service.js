import axios from 'axios';

const baseUrl = '';

function getCallInProgress(token, setConfirmed, setInLoad, setCallData){
  axios.get(`${baseUrl}/${token}/chamada-em-andamento`)
  .then(response => {
    if(response.status === 200){ // existe uma chamada em andamento
      setCallData(response.data);
      setConfirmed(false);
      setInLoad(false);
    }
  })
  .catch(err => { // não existe chamada em andamento
    setInLoad(false);
    setConfirmed(true);
  })
}


function createCall(token, id, setInCall, setCallData){
  axios.get(`${baseUrl}/${token}/chamada-em-andamento`)
  .catch(err => {
    axios.post(`${baseUrl}/${token}/`, {
      idContato: id
    })
    .then(response => {
      if(response.status === 200){
        setCallData(response.data);
        setInCall(true);
      }
    })
  })
}


function hangUpCall(event, token, callData, hangUpCallStates){
  event.preventDefault();
  let subject = event.target.subject.value;
  let idCall = callData.id;

  console.log(callData);

  axios.put(`${baseUrl}/${token}/${idCall}`, {
    assunto: subject
  })
  .then(response => {
    if(response.status === 200){
      hangUpCallStates();
    }
  })
  .catch(err => {
    console.log("Erro");
  })
}

const PhoneService = {
  getCallInProgress,
  createCall,
  hangUpCall
}
export default PhoneService;