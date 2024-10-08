import DashboardStaff from './Pages/DashboardStaff'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [sidebar,setSidebarVisibility] = useState(false);
  return (
    <> 
    <Navbar setSidebar={setSidebarVisibility}/>
    <DashboardStaff sb={sidebar} setSidebar={setSidebarVisibility}/>
    </>
  )
}

export default App
