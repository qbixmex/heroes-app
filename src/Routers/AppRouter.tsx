import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../Components/Login/LoginScreen";
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={ <LoginScreen /> } />

        <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter
