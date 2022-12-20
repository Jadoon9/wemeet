import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const MenuItem = ({
  show,
  Icon,
  handleChange,
  showDownIcon,
  title,
  mainLink,
  item1,
  item2,
  item3,
  item4,
  item5,
  link1,
  link2,
  link3,
  link4,
  link5,
}) => {
  return (
    <>
      <li>
        <Link to={`${mainLink}`} onClick={handleChange}>
          <Icon style={{ fontSize: 17.6, minWidth: 24 }} />
          <span>{title}</span>
          {showDownIcon && (
            <span style={{ float: "right", fontSize: 20 }}>
              {!show ? <MdArrowDropDown /> : <MdArrowDropUp />}
            </span>
          )}
        </Link>
        {show && (
          <ul className="sub-menu">
            <li>
              <Link to={`${link1}`}>{item1}</Link>
            </li>
            {link2 && (
              <li>
                <Link to={`${link2}`}>{item2}</Link>
              </li>
            )}
            {link3 && (
              <li>
                <Link to={`${link3}`}>{item3}</Link>
              </li>
            )}
            {link4 && (
              <li>
                <Link to={`${link4}`}>{item4}</Link>
              </li>
            )}
            {link5 && (
              <li>
                <Link to={`${link5}`}>{item5}</Link>
              </li>
            )}
          </ul>
        )}
      </li>
    </>
  );
};

export default MenuItem;
