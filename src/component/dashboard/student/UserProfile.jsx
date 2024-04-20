import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../layout/studentlayout/css/userprofile.module.scss";
import UserProfileSections from "./UserProfileSection";
import { IoIosLogOut } from "react-icons/io";
import ReactLoading from "react-loading";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    // Simulate logout process or perform any necessary actions
    setTimeout(() => {
      setLoading(false);
      navigate("/student-login");
    }, 1000); // Example: Redirect after 1 second (you can adjust the delay)
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <h1 className={styles.tophead}>My profile</h1>
        </div>
        <div className={styles.requestbut}>
          <button
            className={styles.btnrequest}
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? (
                 <ReactLoading
                 color="#064e3b"
                 width={25}
                 height={25}
                 type="spin"
               />
            ) : (
              <>
                <IoIosLogOut className={styles.icon} />
                Log out
              </>
            )}
          </button>
        </div>
      </div>

      <div className={styles.herosection}>
        <UserProfileSections />
      </div>
    </div>
  );
};

export default UserProfile;
