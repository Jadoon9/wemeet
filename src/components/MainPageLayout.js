import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
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
                  <BreadCrumbs
                    breadcrumb1={breadcrum1}
                    breadcrumb2={breadcrum2}
                    breadcrumb3={breadcrum3}
                    link1={link1}
                    link2={link2}
                    link3={link3}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  {cardTitle && <h4 className="card-title">{cardTitle}</h4>}
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
