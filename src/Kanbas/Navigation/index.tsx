import { Link, useLocation } from "react-router-dom";
import "./index.css";
import logo from "./NEULogo.png";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaQuestionCircle, FaDesktop, FaClock, FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa";
import React from "react";
function KanbasNavigation() {
  const links = [

    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaEnvelopeOpenText className="fs-2" /> },
    { label: "History", icon: <FaClock className="fs-2" />  },
    { label: "Studio",   icon: <FaDesktop className="fs-2" />           },
    { label: "Comomons",  icon: <FaArrowRight className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li> <Link to={`/Kanbas/Dashboard`}><img src={logo} className="wd-logo"/></Link> </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

