import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";

import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";


const AppRoutes = () => {

  const token =
    localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/"
          element={
            token ? (
              <HomePage />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="**"
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;