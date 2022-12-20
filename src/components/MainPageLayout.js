import React from "react";
import { Link } from "react-router-dom";

const MainPageLayout = ({
  title,
  children,
  breadcrum1,
  breadcrum2,
  breadcrum3,
  cardTitle,
  link1,
  link2,
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
                  <h4 className="mb-sm-0">{title}</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li>
                        {/* to="/available" */}
                        <Link
                          to={`${link1}`}
                          className="breadcrumb-item active"
                        >
                          {breadcrum1}
                        </Link>
                      </li>

                      <li>
                        {/* to="createroom" */}
                        <Link
                          to={`${link2}`}
                          className="breadcrumb-item active"
                        >
                          {breadcrum2}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="createroom"
                          className="breadcrumb-item active"
                        >
                          {breadcrum3}
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{cardTitle}</h4>
                  {description && (
                    <p className="card-title-desc">{description}</p>
                  )}

                  {showButton && (
                    <>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="dt-buttons btn-group flex-wrap">
                            <button
                              className="btn btn-secondary buttons-copy buttons-html5"
                              tabindex="0"
                              aria-controls="datatable-buttons"
                              type="button"
                            >
                              <span>Copy</span>
                            </button>
                            <button
                              className="btn btn-secondary buttons-excel buttons-html5"
                              tabindex="0"
                              aria-controls="datatable-buttons"
                              type="button"
                            >
                              <span>Excel</span>
                            </button>
                            <button
                              className="btn btn-secondary buttons-pdf buttons-html5"
                              tabindex="0"
                              aria-controls="datatable-buttons"
                              type="button"
                            >
                              <span>PDF</span>
                            </button>
                            <div className="btn-group">
                              <button
                                className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis"
                                tabindex="0"
                                aria-controls="datatable-buttons"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span>Column visibility</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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
