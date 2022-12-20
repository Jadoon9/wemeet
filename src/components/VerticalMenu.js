import React from "react";
import { useState } from "react";
import {
  MdAccountBox,
  MdOutlineCalendarToday,
  MdOutlineHome,
  MdOutlineMailOutline,
} from "react-icons/md";

import MenuItem from "./MenuItem";

function VerticalMenu() {
  const [showReserv, setShowres] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleShowReservChange = () => {
    setShowres(!showReserv);
  };

  const handleUserChange = () => {
    setShowUser(!showUser);
  };

  const handleReportChange = () => {
    setShowReport(!showReport);
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
                mainLink="/calendar"
                Icon={MdOutlineCalendarToday}
                title="Daily Calendar"
              />

              {/* <MenuItem
                mainLink="/calender"
                Icon={MdOutlineCalendarToday}
                title="Calender"
              /> */}

              <MenuItem
                show={showReserv}
                handleChange={handleShowReservChange}
                Icon={MdAccountBox}
                title="Reservation"
                showDownIcon="true"
                item1="Reservation"
                item2="Room Types"
                item3="Rooms"
                item4="Time Slot"
                item5="Wallet"
                mainLink="#"
                link1="/reservation"
                link2="/room-types"
                link3="/rooms"
                link4="/timeslot"
                link5="/wallet"
              />

              <MenuItem
                mainLink="/coupon"
                Icon={MdOutlineMailOutline}
                title="Coupon"
              />

              <MenuItem
                show={showUser}
                handleChange={handleUserChange}
                Icon={MdAccountBox}
                title="Users"
                showDownIcon="true"
                item1="Manage Users"
                item2="Manage Customers"
                mainLink="#"
                link1="/users"
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
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalMenu;
