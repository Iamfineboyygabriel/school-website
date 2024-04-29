import React, { useState } from "react";
import styles from "./admin.module.scss";
import AllStudent from "./AllStudent";
import Logout from "../../../assets/svg/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("allStudents");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

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
            Admission
          </button>

          <Link to="/add-subject" style={{ marginLeft: "1em" }}>
            <button>Add Subject</button>
          </Link>

          <Link to="/upload-lesson">
            <button style={{ marginLeft: "1em" }}>Upload Lesson</button>
          </Link>

          <Link to="/class-subjects" style={{ marginLeft: "1em" }}>
            <button> view subjects</button>
          </Link>

          <Link
            to="/all-lesson"
            className={activeTab === "all-lesson" ? styles.activeButton : ""}
            style={{ marginLeft: "1em" }}
          >
            <button>All Lesson</button>
          </Link>

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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
