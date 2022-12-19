import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TableData from "../TableData";
import Notifications from "./Notifications";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function NotificationBar() {
  return (
    <>
      <div
        className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
        ariaLabelledby="page-header-notifications-dropdown"
      >
        <div className="p-3">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="m-0"> Notifications </h6>
            </div>
            <div className="col-auto">
              <a href="#" className="small">
                {" "}
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="simplebar-mask">
          <Splide
            options={{
              perMove: 2,
              arrows: false,
              pagination: false,
              perPage: 2,
              drag: "free",
              gap: "2rem",
            }}
          >
            <SplideSlide>
              {TableData.notification.slice(0, 2).map((item) => {
                return (
                  <Notifications
                    key={item.id}
                    title={item.title}
                    short_desc={item.short_desc}
                    time={item.published}
                  />
                );
              })}
            </SplideSlide>
          </Splide>
        </div>

        <div className="p-2 border-top">
          <div className="d-grid">
            <a
              className="btn btn-sm btn-link font-size-14 text-center"
              href="#"
            >
              <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationBar;
