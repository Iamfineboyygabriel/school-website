import React, { useEffect, useState } from "react";
import styles from "../layout/studentlayout/css/studentdashboard.module.scss";
import put from "../../../assets/svg/put.svg";
import globe from "../../../assets/svg/globe.svg";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { GetProfileStudent } from "../../shared/redux/slices/GetStudentProfile.slices";

const StudentDashboard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openMenus, setOpenMenus] = useState(new Array(6).fill(false)); // Adjusted to cover JSS1 to SS3
  const getProfile = useAppSelector((state) => state.student.profile);

  useEffect(() => {
    const studentToken = sessionStorage.getItem("studentData");
    if (studentToken) {
      setLoading(true);
      dispatch(GetProfileStudent()) // Dispatch the thunk
        .unwrap() // Use unwrap for thunks with promises
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

  const getStudent = () => {
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
  };
  const handleMenuToggle = (index) => {
    setOpenMenus((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the state of the clicked menu
      return newState;
    });
  };

  const handleMenuItemClick = (classGrade, term) => {
    navigateToTermPage(classGrade, term);
  };

  const navigateToTermPage = (classGrade, term) => {
    if (!classGrade || !term) {
      console.error("Class grade or term is undefined.");
      return;
    }

    const lowerClassGrade = classGrade.toLowerCase();
    const lowerTerm = term.toLowerCase().replace(/\s/g, "-");
    const path = `/${lowerClassGrade}/${lowerTerm}`;

    navigate(path);
  };

  const renderMenuItems = (classGrade) => {
    const terms = ["First Term", "Second Term", "Third Term"];
    return (
      <ul className={styles.menuitems}>
        {terms.map((term, index) => (
          <li key={index} onClick={() => handleMenuItemClick(classGrade, term)}>
            {`${classGrade} - ${term}`}
          </li>
        ))}
      </ul>
    );
  };

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
        <div className="slider-container">
          <Slider {...settings}>
            {["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].map(
              (classGrade, index) => (
                <div key={index} className={styles.contentinside}>
                  <div className={styles.boxone}>
                    <div className={styles.boxoneflex}>
                      <h2>{classGrade}</h2>
                      <img src={put} alt="" />
                    </div>
                    <div className={styles.requestbut}>
                      <button
                        className={styles.btnrequest}
                        onClick={() => handleMenuToggle(index)}
                        aria-controls={`term-menu-${index}`}
                        aria-haspopup="true"
                      >
                        Select Term{" "}
                        <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
                      </button>
                      {openMenus[index] && (
                        <div className={styles.menu}>
                          {renderMenuItems(classGrade)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>

        <div className={styles.kycreg}>
          <div className={styles.kyccontent}>
            <h1 className={styles.kych1}>Account Verification</h1>
            <div className={styles.kycflex}>
              <p>
                Your account verification has been successful. You can now
                access the school portal and enjoy all its features and
                functionalities.
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
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <tbody>
                {getProfile?.data?.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className={`${styles.tabledata} ${styles.subjectData}`}>
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
