import React from "react";
import { MdClose, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import layout1 from "../imgs/layouts/layout-1.png";
import layout2 from "../imgs/layouts/layout-2.png";
import layout3 from "../imgs/layouts/layout-3.png";

import "simplebar/dist/simplebar.css";
function RightSidebar({ setSettings }) {
  return (
    <>
      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">
            <h5 className="m-0 me-2">Settings</h5>

            <MdClose
              style={{
                cursor: "pointer",
                backgroundColor: "#6c757d",
                color: "white",
                borderRadius: 50,
                opacity: 60,
                marginLeft: 150,
              }}
              onClick={() => setSettings(false)}
            />
          </div>

          <hr className="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>

          <div className="p-4">
            <div className="mb-2">
              <img src={layout1} className="img-thumbnail" alt="layout-1" />
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="light-mode-switch"
                onChange={() => {
                  document.body.dir = "ltr";
                }}
              />
              <label className="form-check-label" htmlFor="light-mode-switch">
                Light Mode
              </label>
            </div>

            <div className="mb-2">
              <img src={layout2} className="img-thumbnail" alt="layout-2" />
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="dark-mode-switch"
              />
              <label className="form-check-label" htmlFor="dark-mode-switch">
                Dark Mode
              </label>
            </div>

            <div className="mb-2">
              <img src={layout3} className="img-thumbnail" alt="layout-3" />
            </div>
            <div className="form-check form-switch mb-5">
              <input
                className="form-check-input theme-choice"
                type="checkbox"
                id="rtl-mode-switch"
                onChange={() => {
                  document.body.dir = "rtl";
                }}
              />
              <label className="form-check-label" htmlFor="rtl-mode-switch">
                RTL Mode
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbar-overlay"></div>
    </>
  );
}

export default RightSidebar;
