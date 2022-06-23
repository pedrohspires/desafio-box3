import Row from './Row.component';
import TableContext from '../../../../../context/Table.context'
import { useContext } from 'react';

function Body(){
  const { contacts } = useContext(TableContext);

  contacts.sort((element1, element2) => element1.id < element2.id)

  return (
    <tbody>
      {
        contacts.map(element => {
          return <Row key={element.id} value={element} />
        })
      }
    </tbody>
  )
}

export default Body;