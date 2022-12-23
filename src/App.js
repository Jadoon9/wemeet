import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import VerticalMenu from "./components/Sidebar/VerticalMenu";
import Dashboard from "./pages/Dashboard/index.js";
import ProgressBarPage from "./pages/ProgressBarPage";
import CreateUser from "./pages/CreateUser/index.js";
import ViewCustomer from "./pages/ViewCustomer";
import Coupon from "./pages/Coupon";
import CreateCoupon from "./pages/CreateCoupon";
import Charts from "./pages/ChartsPage";
import RoomType from "./pages/RoomType/index.js";
import Rooms from "./pages/Rooms/index.js";
import CreateRooms from "./pages/CreateRooms";
import TimeSlot from "./pages/TimeSlot";
import Wallet from "./pages/Wallet";
import CreateWallet from "./pages/CreateWallet";
import UpdateAvailability from "./pages/UpdateAvailability";
import IncomeReport from "./pages/IncomeReport";
import UserReport from "./pages/UserReport";
import Customers from "./pages/Customers";
import CreateReservation from "./pages/CreateReservation";
import Calendarr from "./pages/Calendar";
import UpdateSlot from "./pages/UpdateSlot";
import UsersDetails from "./components/UsersDetails";
import IconsSidebar from "./components/IconsSidebar";
import Notifications from "./components/Notification";
import Editor from "./components/Editor";
import EditorPage from "./pages/EditorPage";
import CarouselPage from "./pages/CarouselPage";
import AlertsPage from "./pages/AlertsPage";
import CardsPage from "./pages/CardsPage";
import BreadCrumbsPage from "./pages/BreadCrumbsPage";
import Form from "./pages/FormPage";
import FormPage from "./pages/FormPage";
// import 'libs/jquery/dist/jquery.min.js'

// import "simplebar-react/dist/simplebar.min.css";
// import 'libs/simplebar/dist/simplebar.min.js'

function App() {
  return (
    <div id="layout-wrapper">
      <BrowserRouter>
        <Header />
        <VerticalMenu />
        {/* <IconsSidebar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendarr />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/breadcrumbs" element={<BreadCrumbsPage />} />
          <Route path="/progress-bar" element={<ProgressBarPage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/ui-elements" element={<AlertsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/breadcrumbs" element={<BreadCrumbsPage />} />
          {/* <Route path="/alerts" element={< />} /> */}

          {/* <Route path="/room-types" element={<RoomType />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/updateslot" element={<UpdateSlot />} />
          <Route path="/available" element={<UpdateAvailability />} />
          <Route path="/timeslot" element={<TimeSlot />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="rooms/createroom" element={<CreateRooms />} />
          <Route path="/manage-users" element={<UsersDetails />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/viewcustomers" element={<ViewCustomer />} />
          <Route path="/income" element={<IncomeReport />} />
          <Route path="/userreport" element={<UserReport />} />
          <Route path="/createcoupon" element={<CreateCoupon />} />
          <Route path="/createwallet" element={<CreateWallet />} />
          <Route path="/createres" element={<CreateReservation />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
