import React, { useEffect, useState } from "react";
import styles from "../layout/studentlayout/scss/studentdashboard.module.scss";
import globe from "../../../assets/svg/globe.svg";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { GetProfileStudent } from "../../shared/redux/slices/GetStudentProfile.slices";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
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
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.contenthead}>
            <h1>
              Welcome{" "}
              {getProfile &&
                getProfile.data &&
                getProfile.data.student &&
                getProfile.data.student.surname}
            </h1>
            <p>Unlock your learning journey today!</p>
          </div>
          <img src={globe} alt="" />
          {loading && (
            <ReactLoading color="#064e3b" width={25} height={25} type="spin" />
          )}
        </div>
        <div className="slider-container"></div>

        <div className={styles.kycreg}>
          <div className={styles.kyccontent}>
            <h1 className={styles.kych1}>Account Verification</h1>
            <div className={styles.kycflex}>
              <p>
                Your account verification has been successful. You can now
                access the school portal and enjoy all its features and
                functionalities. Please note that the subjects you see the below
                are the subjects you'd be taking based on your registered class
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.contenttable}
          style={{
            marginBottom: "2em",
            paddingLeft: "2em",
          }}
        >
          <div className={styles.tableheader}>
            <h1 className={styles.headerh1}>Subjects</h1>
            <Link to="/scheme-of-work">
              <button className={styles.seeall}>See All</button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <tbody>
                {getProfile?.data?.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td
                      className={`${styles.tabledata} ${styles.subjectData}`}
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                      }}
                    >
                      {subject.subject_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default StudentDashboard;
