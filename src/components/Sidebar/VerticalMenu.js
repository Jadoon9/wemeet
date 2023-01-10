import React from "react";
import { useState } from "react";
import {
  MdAccountBox,
  MdPermContactCalendar,
  MdOutlineHome,
  MdOutlineBackupTable,
  MdFormatListBulleted,
  MdStackedBarChart,
  MdNotifications,
  MdOutlinePieChartOutline,
  MdExtension,
} from "react-icons/md";

import MenuItem from "./MenuItem";

function VerticalMenu({ sidebar }) {
  const [showReserv, setShowres] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showUiElements, setShowUiElements] = useState(false);

  const [showPayment, setShowPayment] = useState(false);

  const handleShowReservChange = () => {
    setShowres(!showReserv);
  };

  const handlePaymentsCahnge = () => {
    setShowPayment(!showPayment);
  };

  const handleUiElementChange = () => {
    setShowUiElements(!showUiElements);
  };

  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>
              <div style={{ marginBottom: "2rem" }}>
                <MenuItem mainLink="/" Icon={MdOutlineHome} title="Dashboard" />
              </div>

              <MenuItem
                mainLink="/table"
                Icon={MdOutlineBackupTable}
                title="Data Table"
              />

              <MenuItem
                mainLink="/calendar"
                Icon={MdPermContactCalendar}
                title="Calendar"
              />

              <MenuItem
                mainLink="/form"
                Icon={MdFormatListBulleted}
                title="Form"
              />

              <MenuItem
                show={showPayment}
                handleChange={handlePaymentsCahnge}
                Icon={MdOutlinePieChartOutline}
                title="Payments"
                showDownIcon="true"
                item1="Stripe"
                item2="Paypal"
                mainLink="#"
                link1="/stripe-checkout"
                link2="/paypal"
              />

              <MenuItem
                mainLink="/progress-bar"
                Icon={MdStackedBarChart}
                title="Progress Bar"
              />

              <MenuItem
                mainLink="/notifications"
                Icon={MdNotifications}
                title="Notification"
              />
              {/* <MenuItem
                mainLink="/calender"
                Icon={MdOutlineCalendarToday}
                title="Calender"
              /> */}

              <MenuItem
                show={showReserv}
                handleChange={handleShowReservChange}
                Icon={MdOutlinePieChartOutline}
                title="Charts"
                showDownIcon="true"
                item1="Charts"
                mainLink="#"
                link1="/charts"
              />
              {/* <MenuItem
                show={showAuth}
                handleChange={handleAuthChange}
                Icon={MdAccountBox}
                title="Authentication"
                showDownIcon="true"
                item1="Login"
                item2="Register"
                mainLink="#"
                link1="/login"
                link2="/register"
              /> */}

              {/* <MenuItem
                mainLink="/coupon"
                Icon={MdOutlineMailOutline}
                title="Coupon"
              /> */}
              <MenuItem
                show={showUiElements}
                handleChange={handleUiElementChange}
                Icon={MdExtension}
                title="UI Elements"
                showDownIcon="true"
                item1="Alerts"
                item2="Editor"
                item3="Carousel"
                item4="Cards"
                item5="BreadCrumbs"
                // item4="Time Slot"
                // item5="Wallet"
                mainLink="#"
                link1="/alerts"
                link2="/editor"
                link3="/carousel"
                link4="/cards"
                link5="/breadcrumbs"
                // link3="/rooms"
                // link4="/timeslot"
                // link5="/wallet"
              />
              {/* <MenuItem
                show={showUser}
                handleChange={handleUserChange}
                Icon={MdAccountBox}
                title="Users"
                showDownIcon="true"
                item1="Manage Users"
                item2="Manage Customers"
                mainLink="#"
                link1="/manage-users"
                link2="/customers"
              />

              <MenuItem
                show={showReport}
                handleChange={handleReportChange}
                Icon={MdAccountBox}
                title="Reports"
                showDownIcon="true"
                item1="Income Report"
                item2="User Report"
                mainLink="#"
                link1="/income"
                link2="/userreport"
              /> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalMenu;
