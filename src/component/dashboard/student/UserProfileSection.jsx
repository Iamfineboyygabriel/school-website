import React, { useEffect, useState } from "react";
import styles from "../layout/studentlayout/scss/userprofilesection.module.scss";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { GetProfileStudent } from "../../shared/redux/slices/GetStudentProfile.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfileSections = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const getProfile = useAppSelector((state) => state.student.profile);

  useEffect(() => {
    const studentToken = sessionStorage.getItem("studentData");
    if (studentToken) {
      setLoading(true);
      dispatch(GetProfileStudent())
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          const errorMessage = err.message;
          toast.error(errorMessage);
        });
    } else {
      // Handle case when student token is not found
    }
  }, [dispatch]);

  return (
    <div className={styles.parent}>
      <div>
        <div className={styles.content}>
          <div className={styles.cardholder}>
            <div className={styles.username}>
              <div className={styles.name}>
                {getProfile?.data?.student?.surname}
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
              student advisor for assistance.
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
              <div className={styles.firstdivh1}>Student ID</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.student_id}
              </div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Surname</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.surname}
              </div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Other Names</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.othernames}
              </div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Email</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.email}
              </div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Phone</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.phone}
              </div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Gender</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.gender}
              </div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Date of Birth</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.date_of_birth}
              </div>
            </div>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Class</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.class}
              </div>
            </div>
          </div>
          <div className={styles.firstdivflex}>
            <div className={styles.firstname}>
              <div className={styles.firstdivh1}>Admission Number</div>
              <div className={styles.firstp}>
                {getProfile?.data?.student?.admission_number}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfileSections;
