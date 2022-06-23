function Header(){
  return (
    <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hidden sm:table-header-group">
      <tr>
        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
          Id
        </th>
        <th scope="col" className="px-6 py-3">
          Nome
        </th>
        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
          Telefone
        </th>
        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
          Email
        </th>
        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
          Status
        </th>
        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
          Opções  
        </th>
      </tr>
    </thead>
  )
}

export default Header;