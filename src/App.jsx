import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardStaff from './Pages/DashboardStaff'
import DashboardAdmin from "./Pages/DashboardAdmin"
import DashboardUser from "./Pages/DashboardUser";
import Modal from 'react-modal';

// Initialize modal root element
Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<div>Login</div>} />
          <Route path="user/portal" element={<DashboardUser />} />
          <Route path="staff/portal" element={<DashboardStaff />} />
          <Route path="admin/portal" element={<DashboardAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App