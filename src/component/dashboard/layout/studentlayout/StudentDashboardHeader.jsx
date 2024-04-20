import styles from "./css/studentdashboardheader.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import usericon from "../../../../assets/svg/usericon.svg";
import logoutuser from "../../../../assets/svg/logoutuser.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Modal, ModalBody } from "reactstrap";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const DashboardHeader = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setShowMenu(!showMenu);
  };

  const goToUserProfile = () => {
    navigate("/my-profile");
  };

  const handleLogout = () => {
    // Handle logout logic here
    // Redirect the user to the logout functionality route
    navigate("/logout");
  };

  return (
    <div className={styles.parent}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ color: "#064e3b", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Student's Academic Portal
        </div>

        <div className={styles.row}>
          <div className={styles.userdata}>
            <div className={styles.dropdown}>
              <div className={styles.name}>
                {loading && (
                  <ReactLoading
                    color="blue"
                    width={25}
                    height={25}
                    type="spin"
                  />
                )}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div className={styles.dropdownContent}>
                <div className={styles.dropDownRow} onClick={goToUserProfile}>
                  <div className={styles.logoDrodownDiv}>
                    <img
                      src={usericon}
                      className={styles.dropIcon}
                      alt="User"
                    />
                  </div>
                  <div className={styles.logoTitleDiv}>
                    <div style={{ color: "black" }}>Profile</div>
                  </div>
                </div>

                <div className={styles.dropDownRow} onClick={handleLogout}>
                  <div className={styles.logoDrodownDiv}>
                    <img
                      src={logoutuser}
                      className={styles.dropIcon}
                      alt="Logout"
                    />
                  </div>
                  <div className={styles.logoTitleDiv}>
                    <div style={{ color: "black" }}>Log out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div onClick={toggle} className={styles.menuDiv}>
            <AiOutlineMenu className={styles.menu} />
          </div>

          <Modal
            isOpen={modal}
            toggle={toggle}
            fullscreen
            style={{ width: "60%" }}
          >
            <ModalBody className={styles.modalParent}>
              <div onClick={toggle} className={styles.modalClose}>
                <AiOutlineClose className={styles.menu} />
              </div>
              <div className={styles.modalMenu}>
                <div className={styles.modalMenufirst}>
                  <Link
                    onClick={toggle}
                    className={styles.titleModal}
                    to="/student-dashboard"
                  >
                    Dashboard
                  </Link>

                  <Link
                    onClick={toggle}
                    className={styles.titleModal}
                    to="/my-profile"
                  >
                    Profile
                  </Link>

                  <Link
                    onClick={toggle}
                    className={styles.titleModal}
                    to="/student-login"
                  >
                    Log out
                  </Link>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardHeader;
