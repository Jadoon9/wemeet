import Dashboard from "./pages/Dashboard/index.js";
import ProgressBarPage from "./pages/ProgressBarPage";
import Calendarr from "./pages/Calendar";
// import Notifications from "./pages/";
import EditorPage from "./pages/EditorPage";
import CarouselPage from "./pages/CarouselPage";
import AlertsPage from "./pages/AlertsPage";
import CardsPage from "./pages/CardsPage";
import BreadCrumbsPage from "./pages/BreadCrumbsPage";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import DataTablePage from "./pages/DatatablePage/index";
import ChartsPage from "./pages/ChartsPage";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    protected: false,
  },
  {
    path: "/table",
    element: <DataTablePage />,

    protected: false,
  },
  {
    path: "/calendar",
    element: <Calendarr />,
    protected: false,
  },
  {
    path: "/form",
    element: <FormPage />,
    protected: false,
  },
  {
    path: "/progress-bar",
    element: <ProgressBarPage />,
    protected: false,
  },
  //   {
  //     path: "/notifications",
  //     element: Notifications,
  //     protected: false,
  //   },
  {
    path: "/charts",
    element: <ChartsPage />,
    protected: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    protected: true,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    protected: false,
  },
  {
    path: "/ui-elements",
    element: <AlertsPage />,
    protected: false,
  },
  {
    path: "/breadcrumbs",
    element: <BreadCrumbsPage />,
    protected: false,
  },
  {
    path: "/alerts",
    element: <AlertsPage />,
    protected: false,
  },
  {
    path: "/editor",
    element: <EditorPage />,
    protected: true,
  },
  {
    path: "/carousel",
    element: <CarouselPage />,
    protected: true,
  },
  {
    path: "/cards",
    element: <CardsPage />,
    protected: false,
  },
  {
    path: "/breadcrumbs",
    element: <BreadCrumbsPage />,
    protected: false,
  },
];

export default routes;
