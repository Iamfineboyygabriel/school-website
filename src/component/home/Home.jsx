import React, { useState } from "react";
import styles from "../home/css/home.module.scss";
import star from "../../assets/png/star.png";
import arrow from "../../assets/png/arrowright.png";
import personal from "../../assets/png/personal.png";
import group from "../../assets/png/group.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedSignup, setSelectedSignup] = useState(null);

  const selectSignupType = (e) => {
    setSelectedSignup(e.id);
    sessionStorage.setItem("accountType", e.direct);
  };

  const signupType = [
    {
      id: 1,
      icon: <img src={group} className={styles.payicon} alt="groupimg" />,
      name: "Login as a student",
      direct: "Student",
    },
    {
      id: 2,
      icon: <img src={personal} className={styles.payicon} alt="img" />,
      name: "Login as an admin",
      direct: "Admin",
    },
  ];

  let navigate = useNavigate();
  const userLogin = () => {
    if (selectedSignup === 1) {
      navigate("/student-login");
    } else if (selectedSignup === 2) {
      navigate("/admin-login");
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.discone}>
          <h2 className={styles.headleftimg}>
            Welcome Back to School
            <img src={star} alt="star" />
          </h2>
        </div>
        <div className={styles.disctwo}>
          <div className={styles.insidedisc}>
            <div className={styles.arrowstyle}>
              <img src={arrow} alt="arrow" />
            </div>
            <h2 className={styles.headinner}>
              Let’s get you started by choosing your login type:
            </h2>
            <div className={styles.decidebutton}>
              {signupType.map((clickbutton) => (
                <div
                  key={clickbutton.id}
                  className={styles.personal}
                  style={{
                    border:
                      clickbutton.id === selectedSignup
                        ? "2px solid #627d6e"
                        : "",
                    backgroundColor:
                      clickbutton.id === selectedSignup ? "#F0F3FF" : "",
                  }}
                  onClick={() => selectSignupType(clickbutton)}
                >
                  <div className={styles.imgpersonal}>
                    {clickbutton.icon}
                    <h3 className={styles.perhead}>{clickbutton.name}</h3>
                  </div>
                  <div
                    className={styles.dot}
                    style={{
                      backgroundColor:
                        clickbutton.id === selectedSignup ? "#627d6e" : "",
                    }}
                  ></div>
                </div>
              ))}
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  onClick={userLogin}
                  disabled={!selectedSignup}
                  style={{
                    backgroundColor: !selectedSignup ? "#a7f3d0" : "",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
