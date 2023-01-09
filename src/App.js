import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import VerticalMenu from "./components/Sidebar/VerticalMenu";
import Dashboard from "./pages/Dashboard/index.js";
import ProgressBarPage from "./pages/ProgressBarPage";
import Charts from "./pages/ChartsPage";
import Calendarr from "./pages/Calendar";
import Notifications from "./components/Notification";
import EditorPage from "./pages/EditorPage";
import CarouselPage from "./pages/CarouselPage";
import AlertsPage from "./pages/AlertsPage";
import CardsPage from "./pages/CardsPage";
import BreadCrumbsPage from "./pages/BreadCrumbsPage";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import DataTablePage from "./pages/DatatablePage/index";
import { useEffect, useState } from "react";
import routes from "./routes";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { getUsers } from "./components/Authentication/loginThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./redux/slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

// import 'libs/jquery/dist/jquery.min.js'

// import "simplebar-react/dist/simplebar.min.css";
// import 'libs/simplebar/dist/simplebar.min.js'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (loggedUser) {
      dispatch(login(loggedUser));
      navigate(location.pathname);
    }
    // dispatch(getUsers());
  }, [dispatch]);

  return (
    <div id="layout-wrapper">
      <Routes>
        {/* Public Routesss */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routess */}
        <Route element={<ProtectedRoute isLoggedIn={true} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="table" element={<DataTablePage />} />
          <Route path="calendar" element={<Calendarr />} />
          <Route path="form" element={<FormPage />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="charts" element={<Charts />} />
          <Route path="ui-elements" element={<AlertsPage />} />
          <Route path="breadcrumbs" element={<BreadCrumbsPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="carousel" element={<CarouselPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="breadcrumbs" element={<BreadCrumbsPage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
