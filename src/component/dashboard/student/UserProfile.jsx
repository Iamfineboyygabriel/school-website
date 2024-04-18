import styles from "../layout/studentlayout/css/userprofile.module.scss";
import UserProfileSections from "./UserProfileSection";
import { IoIosLogOut } from "react-icons/io";

const UserProfile = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <h1 className={styles.tophead}>My profile</h1>
        </div>
        <div className={styles.requestbut}>
          <button
            className={styles.btnrequest}
            // onClick={handleModalShowTransfer}
          >
            <IoIosLogOut className={styles.icon} />
            Log out
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
