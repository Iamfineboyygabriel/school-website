import React, { useState } from "react";
import styles from "./css/studentdashboardheader.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarContent}>
        <Link to="/student-dashboard" onClick={onClose}>
          Dashboard
        </Link>
        <Link to="/my-profile" onClick={onClose}>
          Profile
        </Link>
        <Link to="/" onClick={onClose}>
          Log out
        </Link>
      </div>
    </div>
  );
};

const DashboardHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToUserProfile = () => {
    navigate("/my-profile");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.logoDiv}>Student's Academic Portal</div>

      <div className={styles.row}>
        <div className={styles.userdata}>
          <div className={styles.menuDiv} onClick={toggleSidebar}>
            <AiOutlineMenu className={styles.menu} />
          </div>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default DashboardHeader;
