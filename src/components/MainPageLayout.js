import React from "react";
import { Link } from "react-router-dom";
import TableButtons from "./TableButtons";

const MainPageLayout = ({
  title,
  children,
  breadcrum1,
  breadcrum2,
  breadcrum3,
  cardTitle,
  link1,
  link2,
  link3,
  description,
  showButton,
}) => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {title && (
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  {/* <h4 className="mb-sm-0">{title}</h4> */}

                  {/* <div className="page-title-right"> */}

                  {/* <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Upzet</a>
                      </li>
                      <li className="breadcrumb-item active">Calendar</li>
                    </ol>
                  </div> */}

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0 rounded">
                      <li className="breadcrumb-item">
                        <Link
                          to={`${link1}`}
                          className=" breadcrumb-item active"
                        >
                          {breadcrum1}
                        </Link>
                      </li>

                      <li className="breadcrumb-item">
                        <Link
                          to={`${link2}`}
                          className="breadcrumb-item active"
                        >
                          {breadcrum2}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="breadcrumb-item active"
                          to={`${link3}`}
                        >
                          {breadcrum3}
                        </Link>
                      </li>
                    </ol>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {/* <h4 className="card-title">{cardTitle}</h4> */}
                  {description && (
                    <p className="card-title-desc">{description}</p>
                  )}

                  {showButton && (
                    <>
                      <TableButtons />
                    </>
                  )}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageLayout;
