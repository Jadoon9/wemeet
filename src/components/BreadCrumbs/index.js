import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({
  homeIcon,
  breadcrumb1,
  breadcrumb2,
  breadcrumb3,
  breadcrumb4,
  breadcrumb5,
  link1,
  link2,
  link3,
  link4,
  link5,
}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rounded">
        <li className="breadcrumb-item">
          <Link to={link1}>{breadcrumb1}</Link>
        </li>
        {breadcrumb2 && (
          <li className="breadcrumb-item">
            <Link to={link2}>{breadcrumb2}</Link>
          </li>
        )}
        {breadcrumb3 && (
          <li className="breadcrumb-item">
            <Link to={link3}>{breadcrumb3}</Link>
          </li>
        )}
        {breadcrumb4 && (
          <li className="breadcrumb-item">
            <Link to={link4}>{breadcrumb4}</Link>
          </li>
        )}
        {breadcrumb5 && (
          <li className="breadcrumb-item">
            <Link to={link5}>{breadcrumb5}</Link>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
