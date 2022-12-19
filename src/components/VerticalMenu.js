import React from "react";
import { useState } from "react";
import {
  MdAccountBox,
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdOutlineHome,
  MdOutlineMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";

function VerticalMenu() {
  const [show, setShow] = useState(false);
  const [showres, setShowres] = useState(false);
  const [showreport, setShowreport] = useState(false);
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>

              <li>
                <Link
                  to="/"
                  className="waves-effect"
                  style={{ textDecoration: "none" }}
                >
                  <MdOutlineHome style={{ fontSize: 17.6, minWidth: 24 }} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/calender" className=" waves-effect">
                  <MdOutlineCalendarToday />
                  <span>Calendar</span>
                </Link>
              </li>

              <li>
                <Link to="/coupon">
                  <MdOutlineMailOutline />
                  <span>Coupon</span>
                </Link>
              </li>

              <li>
                <a href="#" onClick={() => setShow(!show)}>
                  {/* <button className="has-arrow waves-effect" onClick={()=>setShow(false)}> */}
                  <MdAccountBox />
                  <span>Users</span>
                  <span style={{ float: "right", fontSize: 20 }}>
                    {!show ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                </a>
                {show && (
                  <ul className="sub-menu">
                    <li>
                      <Link to="/users">Manage Users</Link>
                    </li>
                    <li>
                      <Link to="/customers">Manage Customers</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="#" onClick={() => setShowres(!showres)}>
                  <MdAccountBox />
                  <span>Reservation</span>
                  <span style={{ float: "right", fontSize: 20 }}>
                    {!showres ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                </a>
                {showres && (
                  <ul className="sub-menu">
                    <li>
                      <Link to="/res">Reservation</Link>
                    </li>
                    <li>
                      <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                      <Link to="/timeslot">Time Slot</Link>
                    </li>
                    <li>
                      <Link to="/wallet">Wallet</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/coupon">
                  <MdOutlineMailOutline />
                  <span>Coupon</span>
                </Link>
              </li>
              <li>
                <a href="#" onClick={() => setShowreport(!showreport)}>
                  <MdAccountBox />
                  <span>Report</span>
                  <span style={{ float: "right", fontSize: 20 }}>
                    {!showreport ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                </a>
                {showreport && (
                  <ul className="sub-menu">
                    <li>
                      <Link to="/income">Income Report</Link>
                    </li>
                    <li>
                      <Link to="/userreport">User Report</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalMenu;
