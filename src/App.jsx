import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardStaff from "./Pages/DashboardStaff";
import DashboardAdmin from "./Pages/DashboardAdmin";
import DashboardUser from "./Pages/DashboardUser";
import LoginPage from "./Pages/Login";
import UnauthorizedPage from "./Pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./Pages/NotFound";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route path="/admin/portal" element={<DashboardAdmin />} />
          </Route>

          <Route element={<ProtectedRoute requiredRole="staff" />}>
            <Route path="/staff/portal" element={<DashboardStaff />} />
          </Route>
          <Route element={<ProtectedRoute requiredRole="user" />}>
            <Route path="/user/portal" element={<DashboardUser />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
