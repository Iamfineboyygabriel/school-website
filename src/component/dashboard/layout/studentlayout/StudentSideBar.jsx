import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import StudentDashboardHeader from "./StudentDashboardHeader";
import ActiveDashboard from "../../../../assets/svg/activedashboard.svg";
import InActiveDashboard from "../../../../assets/svg/inactivedashboard.svg";
import Logout from "../../../../assets/svg/logout.svg";
import styles from "./css/studentsidebar.module.scss";

const SideMenu = ({ children }) => {
  const [state, setState] = useState("Active");
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const toggle = () => {
    setModal(!modal);
  };

  const onIdle = () => {
    setState("Idle");
  };

  const logOut = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  const onActive = () => {
    setState("Active");
  };

  const onAction = () => {
    setCount(count + 1);
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 5_000,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function logoutUser() {
    sessionStorage.clear();
    localStorage.clear();
  }

  return (
    <div>
      <StudentDashboardHeader />
      <div style={{ display: "flex" }}>
        <div className={styles.parent}>
          <div>
            <NavLink
              to="/student-dashboard"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <div
                className={styles.iconpagename}
                style={{
                  background:
                    location === "/student-dashboard"
                      ? "linear-gradient(180deg, rgba(6, 78, 59, 0.1) 0%, rgba(6, 78, 59, 0.1) 76.04%)"
                      : "",
                }}
              >
                {location === "/student-dashboard" ? (
                  <img
                    src={ActiveDashboard}
                    className={styles.icon}
                    alt="active-dashboard"
                  />
                ) : (
                  <img
                    src={InActiveDashboard}
                    className={styles.icon}
                    alt="inactive-dashboard"
                  />
                )}
                <div
                  style={{
                    color:
                      location === "/student-dashboard" ? "#064e3b" : "#888888",
                  }}
                  className={styles.pageName}
                >
                  Dashboard
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/my-profile"
              className={styles.link}
              activeClassName={styles.activeLink}
              onClick={logoutUser}
            >
              <div
                className={styles.iconpagename}
                style={{
                  background:
                    location === "/my-profile"
                      ? "linear-gradient(180deg, rgba(6, 78, 59, 0.1) 0%, rgba(6, 78, 59, 0.1) 76.04%)"
                      : "",
                }}
              >
                <div
                  style={{
                    color: location === "/my-profile" ? "#064e3b" : "#888888",
                  }}
                  className={styles.pageName}
                >
                  My Profile
                </div>
              </div>
            </NavLink>

            <NavLink to="/" className={styles.link} onClick={logoutUser}>
              <div className={styles.iconpagename}>
                <img src={Logout} className={styles.icon} alt="horse" />
                <div style={{ color: "#888888" }} className={styles.pageName}>
                  Log Out
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default SideMenu;
