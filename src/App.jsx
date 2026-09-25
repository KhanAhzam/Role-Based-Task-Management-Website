import { BrowserRouter, Routes, Route } from "react-router-dom"

import AdminLayout from "./layout/AdminLayout"
import UserLayout from "./layout/UserLayout"

import Login from "./pages/Common/SignIn"

import UserDashboard from "./pages/User/UserDashboard"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import ProtectedRoute from "./components/ProtectedRoutes"

function App() {
  return (
    <BrowserRouter>
      <Routes>


        {/* Public */}
        <Route path="/signin" element={<Login />}></Route>



        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>



        {/* User */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App