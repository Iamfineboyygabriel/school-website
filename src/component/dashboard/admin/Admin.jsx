import React, { useState } from "react";
import styles from "./css/admin.module.scss";
import Test from "./Test";
import AllStudent from "./AllStudent";
import Assignment from "./Assignment"; // Assuming Assignment component
import Logout from "../../../assets/svg/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { Upload } from "@mui/icons-material";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("allStudents"); // State to track active tab
  const [loading, setLoading] = useState(false); // State to track loading state

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Set loading state to true when logout is clicked
    setLoading(true);
    // Simulate logout process (you should replace this with your actual logout logic)
    setTimeout(() => {
      // After some time (simulating async operation), set loading state back to false
      setLoading(false);
      // Perform actual logout actions here, such as clearing session data or redirecting to login page
      // Navigate to the logout path
      navigate("/admin-login");
    }, 1000);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.parentchild}>
        <div className={styles.buttons}>
          <button
            className={activeTab === "allStudents" ? styles.activeButton : ""}
            onClick={() => handleTabChange("allStudents")}
          >
            admission
          </button>
           <button
            className={activeTab === "test" ? styles.activeButton : ""}
            onClick={() => handleTabChange("test")}
          >
            Test
          </button>
          <button
            className={activeTab === "assignment" ? styles.activeButton : ""}
            onClick={() => handleTabChange("assignment")}
          >
            Assignment
          </button> 
          <button>
            <Link className={styles.upload} to="/upload-lectures">
              Upload
            </Link>
          </button>

          <button className={styles.log} onClick={handleLogout}>
            {loading ? (
              <ReactLoading
                color="#064e3b"
                width={25}
                height={25}
                type="spin"
              />
            ) : (
              <Link to="/">
                <div className={styles.iconpagename}>
                  <img src={Logout} className={styles.icon} alt="horse" />
                  <div
                    style={{ color: "white", fontFamily: "sans-serif" }}
                    className={styles.pageName}
                  >
                    LogOut
                  </div>
                </div>
              </Link>
            )}
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === "allStudents" ? (
            <AllStudent
              showModal={showModal}
              handleModalOpen={handleModalOpen}
              closeModal={closeModal}
              selectedUser={selectedUser}
            />
          ) : activeTab === "test" ? (
            <Test
              showModal={showModal}
              handleModalOpen={handleModalOpen}
              closeModal={closeModal}
              selectedUser={selectedUser}
            />
          ) : activeTab === "assignment" ? (
            <Assignment />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
