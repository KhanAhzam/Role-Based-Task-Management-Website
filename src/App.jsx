import { BrowserRouter, Routes, Route } from "react-router-dom"

import AdminLayout from "./layout/AdminLayout"
import UserLayout from "./layout/UserLayout"

import Login from "./pages/Common/SignIn"

import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />}></Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* User */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App