import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import Dashboard from "./pages/Dashboard/index.js";
import CreateUser from "./pages/CreateUser/index.js";
import ViewCustomer from "./pages/ViewCustomer";
import Coupon from "./pages/Coupon";
import CreateCoupon from "./pages/CreateCoupon";
import Reservation from "./pages/Reservation";
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
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/room-types" element={<RoomType />} />
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
          <Route path="/createres" element={<CreateReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
