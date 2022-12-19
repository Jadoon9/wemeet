import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import Dashboard from "./pages/Dashboard/index.js";
import CreateUser from "./pages/CreateUser/index.js";
import ViewCustomer from "./pages/ViewCustomer";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Coupon from "./pages/Coupon";
import CreateCoupon from "./pages/CreateCoupon";
import Reservation from "./pages/Reservation";
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
import Calenderr from "./pages/Calender";
import UpdateSlot from "./pages/UpdateSlot";
// import 'libs/jquery/dist/jquery.min.js'

// import "simplebar-react/dist/simplebar.min.css";
// import 'libs/simplebar/dist/simplebar.min.js'

function App() {
  return (
    <div id="layout-wrapper">
      <BrowserRouter>
        <Header />
        <VerticalMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<CreateUser />} />
          <Route path="/viewcustomers" element={<ViewCustomer />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/createcoupon" element={<CreateCoupon />} />
          <Route path="/res" element={<Reservation />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="rooms/createroom" element={<CreateRooms />} />
          <Route path="/available" element={<UpdateAvailability />} />
          <Route path="/timeslot" element={<TimeSlot />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/createwallet" element={<CreateWallet />} />
          <Route path="/income" element={<IncomeReport />} />
          <Route path="/userreport" element={<UserReport />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/createres" element={<CreateReservation />} />
          <Route path="/calender" element={<Calenderr />} />
          <Route path="/updateslot" element={<UpdateSlot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
