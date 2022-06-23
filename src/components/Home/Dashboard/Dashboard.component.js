import './css/Dashboard.css'
import Table from './components/Table.component';

function Dashboard() {
  return (
    <div className="dashboard-container top-8 relative sm:top-0 sm:w-full text-white">
      <div className="dashboard-content relative sm:h-full">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard;