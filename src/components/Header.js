import React from "react";
import "../App.css";
import smlogo from "../imgs/logo-sm.png";
import lightlogo from "../imgs/logo-light.png";
import usflag from "../imgs/flags/us.jpg";
import avatar from "../imgs/users/avatar-2.jpg";
import { MdExpandMore } from "react-icons/md";
import russiaflag from "../imgs/flags/russia.jpg";
import italyflag from "../imgs/flags/italy.jpg";
import github from "../imgs/brands/github.png";
import mailchimp from "../imgs/brands/mail_chimp.png";
import bitbucket from "../imgs/brands/bitbucket.png";
import slack from "../imgs/brands/slack.png";
import dropbox from "../imgs/brands/dropbox.png";
import dribble from "../imgs/brands/dribbble.png";
import germanyflag from "../imgs/flags/germany.jpg";

import { useState } from "react";
import {
  RiApps2Line,
  RiBarChartHorizontalLine,
  RiFullscreenLine,
  RiLockUnlockLine,
  RiNotification3Line,
  RiSearchLine,
  RiSettings3Fill,
  RiShoppingCartLine,
  RiShutDownLine,
} from "react-icons/ri";
import Country from "./Country";
import Brands from "./Brands";
import NotificationBar from "./NotificationBar";
import RightSidebar from "./RightSidebar";
import VerticalMenu from "./Sidebar/VerticalMenu";

function Header({ onClick }) {
  const [showflag, setShowFlag] = useState(false);
  const [showsidebar, setShowSidebar] = useState(true);
  const [showbrand, setShowBrand] = useState(false);
  const [shownoti, setShowNoti] = useState(false);
  const [showdropdown, setDropDown] = useState(false);
  const [showSettings, setSettings] = useState(false);

  console.log("hereeeeeee");

  return (
    <div>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box text-center">
              <a href="#" className="logo logo-light">
                <span className="logo-lg">
                  <img
                    src={lightlogo}
                    alt="logo-light"
                    style={{ height: 24 }}
                  />
                </span>
              </a>
            </div>

            {/* <button
              onClick={onClick}
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <RiBarChartHorizontalLine className="align-middle" />
            </button> */}

            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative" style={{ marginLeft: 30 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="ri-search-line">
                  <RiSearchLine />
                </span>
              </div>
            </form> */}
          </div>

          <div className="d-flex">
            <div
              className="dropdown d-none d-sm-inline-block"
              onClick={() => setShowFlag(!showflag)}
            >
              <button
                type="button"
                className="menu-trigger btn header-item noti-icon waves-effect menu-trigger"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className=""
                  src={usflag}
                  alt="Header Language"
                  style={{ height: 16 }}
                />
              </button>
              {showflag && (
                <div className="dropdown-menu dropdown-menu-end show">
                  <Country img={russiaflag} country={"Russia"} />
                  <Country img={germanyflag} country={"Germany"} />
                  <Country img={russiaflag} country={"russia"} />
                  <Country img={russiaflag} country={"russia"} />
                </div>
              )}
            </div>
            {/* ////////////////// */}
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="menu-trigger btn header-item noti-icon waves-effect menu-trigger "
                // "btn header-item noti-icon waves-effect menu-trigger"

                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setShowBrand(!showbrand)}
              >
                <RiApps2Line className="i" />
              </button>
              {showbrand && (
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end show">
                  <div className="px-lg-2">
                    <div className="row g-0">
                      <Brands img={bitbucket} name={"BitBucket"} />
                      <Brands img={github} name={"Github"} />
                      <Brands img={dribble} name={"Dribble"} />
                    </div>

                    <div className="row g-0">
                      <Brands img={dropbox} name={"Dropbox"} />
                      <Brands img={mailchimp} name={"Mail Chimp"} />
                      <Brands img={slack} name={"Slack"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <RiFullscreenLine className="i" />
              </button>
            </div>

            {/* <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setShowNoti(!shownoti)}
                >
                  <RiNotification3Line className="i"/>
                  <span className="noti-dot"></span>
                </button>
                {shownoti && 
                <NotificationBar/>}
                
                
              
              </div> */}

            <div
              className="dropdown d-inline-block user-dropdown"
              onClick={() => setDropDown(!showdropdown)}
            >
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={avatar}
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">Admin</span>

                <MdExpandMore className="d-none d-xl-inline-block" />
              </button>
              {showdropdown && (
                <div className="dropdown-menu dropdown-menu-end show">
                  <a className="dropdown-item" href="auth-lock-screen.html">
                    <i className="ri-lock-unlock-line align-middle me-1"></i>
                    <RiLockUnlockLine className="align-middle me-1" /> Lock
                    screen
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#">
                    <RiShutDownLine className="align-middle me-1 text-danger" />{" "}
                    Log Out
                  </a>
                </div>
              )}
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
                onClick={() => setSettings(!showSettings)}
              >
                <RiSettings3Fill />
              </button>
              {showSettings && <RightSidebar setSettings={setSettings} />}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
