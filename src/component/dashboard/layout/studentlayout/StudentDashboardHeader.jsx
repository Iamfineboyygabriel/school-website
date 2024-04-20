import styles from "./css/studentdashboardheader.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import usericon from "../../../../assets/svg/usericon.svg";
import logoutuser from "../../../../assets/svg/logoutuser.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Modal, ModalBody } from "reactstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const DashboardHeader = () => {
  const [showMenu, setShowMenu] = useState(false); // Changed initial state to false
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setShowMenu(!showMenu); // Toggle showMenu state
  };

  const goToUserProfile = () => {
    navigate("/my-profile");
  };

  return (
    <div className={styles.parent}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.logoDiv}>Student's Academic Portal</div>

        <div className={styles.row}>
          <div className={styles.userdata}>
            <div className={styles.dropdown}>
              <div className={styles.name}>
                {loading && (
                  <ReactLoading
                    color="#064e3b"
                    width={25}
                    height={25}
                    type="spin"
                  />
                )}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div
                className={`${styles.dropdownContent} ${
                  showMenu ? styles.show : ""
                }`}
              >
                <div
                  className={styles.dropDownRow}
                  onClick={goToUserProfile}
                >
                  <div className={styles.logoDrodownDiv}>
                    <img
                      src={usericon}
                      className={styles.dropIcon}
                      alt="horse"
                    />
                  </div>
                  <div className={styles.logoTitleDiv}>
                    <div className={styles.dropDowntitle}>
                      <Link
                        to="/my-profile"
                        style={{ color: "#052e16", fontFamily: "sans-serif" }}
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.dropDownRow}>
                  <div className={styles.logoDrodownDiv}>
                    <img
                      src={logoutuser}
                      className={styles.dropIcon}
                      alt="horse"
                    />
                  </div>
                  <div className={styles.logoTitleDiv}>
                    <div className={styles.dropDowntitle}>
                      <Link
                        to="/my-profile"
                        style={{ color: "#052e16", fontFamily: "sans-serif" }}
                      >
                        Profile
                      </Link>
                    </div>
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
            style={{ width: "60%", margin: "auto" }}
          >
            <ModalBody className={styles.modalParent}>
              <div onClick={toggle} className={styles.modalClose}>
                {" "}
                <AiOutlineClose className={styles.menu} />
              </div>
              <div className={styles.modalMenu}>
                <div className={styles.modalMenufirst}>
                  <Link
                    onClick={toggle}
                    style={{
                      color: "#064e3b",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                    }}
                    to="/student-dashboard"
                  >
                    Dashboard
                  </Link>

                  <Link
                    onClick={toggle}
                    style={{
                      color: "#064e3b",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                    }}
                    to="/my-profile"
                  >
                    Profile
                  </Link>

                  <Link
                    onClick={toggle}
                    style={{
                      color: "#064e3b",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontFamily: "Roboto, sans-serif",
                    }}
                    to="/"
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
