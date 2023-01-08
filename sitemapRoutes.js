import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./src/components/Header";
import VerticalMenu from "./src/components/Sidebar/VerticalMenu";
import Dashboard from "./src/pages/Dashboard/index.js";
import ProgressBarPage from "./src/pages/ProgressBarPage";
import Charts from "./src/pages/ChartsPage";
import Calendarr from "./src/pages/Calendar";
import Notifications from "./src/components/Notification";
import EditorPage from "./src/pages/EditorPage";
import CarouselPage from "./src/pages/CarouselPage";
import AlertsPage from "./src/pages/AlertsPage";
import CardsPage from "./src/pages/CardsPage";
import BreadCrumbsPage from "./src/pages/BreadCrumbsPage";
import FormPage from "./src/pages/FormPage";
import LoginPage from "./src/pages/Authentication/LoginPage";
import RegisterPage from "./src/pages/Authentication/RegisterPage";
import DataTablePage from "./src/pages/DatatablePage/index";

function App() {
  return (
    <div id="layout-wrapper">
      <BrowserRouter>
        <Header />
        <VerticalMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<DataTablePage />} />
          <Route path="/calendar" element={<Calendarr />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/progress-bar" element={<ProgressBarPage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ui-elements" element={<AlertsPage />} />
          <Route path="/breadcrumbs" element={<BreadCrumbsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/breadcrumbs" element={<BreadCrumbsPage />} />
          {/* <Route path="/alerts" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
