import React, { useEffect, useState } from "react";
import styles from "../layout/studentlayout/css/userprofilesection.module.scss";
import takepic from "../../../assets/svg/takepic.svg";
import { LuFileEdit } from "react-icons/lu";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { getStudentProfile } from "../../shared/redux/services/getProfile.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfileSections = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.student.profile);
  // console.log("profilesection", userProfile);

  useEffect(() => {
    // console.log("Fetching user profile...");
    getStudentProfile();
  }, []);

  const studentProfile = () => {
    setLoading(true);
    dispatch(getStudentProfile())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.errorMessage;
        toast.error(errorMessage);
      });
  };

  // console.log("User profile:", userProfile);

  return (
    <div className={styles.parent}>
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
      </div>
      <div className={styles.kycreg}>
        <div className={styles.kyccontent}>
          <h1 className={styles.kych1}>Important Notice</h1>
          <div className={styles.kycflex}>
            <p>
              Please be informed that the data provided below is fixed and
              cannot be edited from your end. If you notice any errors or
              discrepancies, we kindly request you to visit the office of the
              student advisor for assistance. Alternatively, you can reach out
              to us via email at the support section, and our team will be happy
              to assist you further.
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
              <div className={styles.firstdivh1}>First name</div>
              <div className={styles.firstp}>Colos</div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}> Last name</div>
              <div className={styles.firstp}>Arizzona</div>
            </div>
          </div>

          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Class Grade</div>
              <div className={styles.firstp}>Jss1</div>
            </div>

            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Term</div>
              <div className={styles.firstp}>First Term</div>
            </div>
          </div>

          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Email address</div>
              <div className={styles.firstp}>oncolos437@gmail.com</div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}> nationality</div>
              <div className={styles.firstp}>Nigeria</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <div className={styles.contenth2}>Identification</div>
        </div>
        <div className={styles.contentdata}>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Registration</div>
              <div className={styles.firstp}>Completed</div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}> Document verification</div>
              <div className={styles.firstp}>Completed</div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>ID Selfie</div>
              <div className={styles.firstp}>Pending</div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}> number verification</div>
              <div className={styles.firstp}>Completed</div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Address</div>
              <div className={styles.firstp}>4,Arigbo. Lagos,Nigeria</div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Address verification</div>
              <div className={styles.firstp}>Completed</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <div className={styles.contenth2}>Password</div>
          <div className={styles.changepass}>
            <div className={styles.changepassh1}>
              <LuFileEdit className={styles.icon} />
              Change password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSections;
