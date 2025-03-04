import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./components/auth/AuthProvider";
import ProtectedRoute from "./components/auth/ProtectedRoute";


function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
