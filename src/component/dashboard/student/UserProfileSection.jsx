import React, { useEffect, useState } from "react";
import styles from "../layout/studentlayout/css/userprofilesection.module.scss";
import takepic from "../../../assets/svg/takepic.svg";
import { LuFileEdit } from "react-icons/lu";
import { GetProfileStudent } from "../../shared/redux/slices/GetStudentProfile.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfileSections = () => {
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await GetProfileStudent();
        setProfileData(response.data.student);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch profile data");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className={styles.parent}>
      {loading ? (
        <p>Loading...</p>
      ) : profileData ? (
        <div>
          <div className={styles.content}>
            <div className={styles.cardholder}>
              <div className={styles.userimg}>
                <div className={styles.userimgspan}>
                  <span>
                    <img
                      src={takepic}
                      alt="docpic"
                      className={styles.relativeicon}
                    />
                  </span>
                </div>
              </div>
              <div className={styles.username}>
                <div className={styles.name}></div>
                <div className={styles.country}>
                  <div className={styles.countryh1}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.kycreg}>
            <div className={styles.kyccontent}>
              <h1 className={styles.kych1}>Important Notice</h1>
              <div className={styles.kycflex}>
                <p>
                  Please be informed that the data provided below is fixed and
                  cannot be edited from your end. If you notice any errors or
                  discrepancies, we kindly request you to visit the office of
                  the student advisor for assistance. Alternatively, you can
                  reach out to us via email at the support section, and our team
                  will be happy to assist you further.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contenthead}>
              <div className={styles.contenth2}>Personal Information</div>
            </div>
            <div className={styles.contentdata}>
              <div className={styles.firstdivflex}>
                <div className={styles.firstname}>
                  <div className={styles.firstdivh1}>Student id</div>
                  <div className={styles.firstp}>{profileData.student_id}</div>
                </div>
                {/* Add other profile data here */}
              </div>
            </div>
          </div>
          {/* Add other sections for profile data */}
        </div>
      ) : (
        <p>No student profile data found.</p>
      )}
    </div>
  );
};

export default UserProfileSections;
