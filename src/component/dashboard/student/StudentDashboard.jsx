import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import globe from "../../../assets/svg/globe.svg";
import put from "../../../assets/svg/put.svg";
import Slider from "react-slick";
import styles from "../layout/studentlayout/css/studentdashboard.module.scss";

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

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState(new Array(6).fill(false)); // Adjusted to cover JSS1 to SS3

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
            <h1>Welcome Colos</h1>
            <p>Unlock your learning journey today!</p>
          </div>
          <img src={globe} alt="" />
          {loading && (
            <ReactLoading color="blue" width={25} height={25} tye="spin" />
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
                Your account verification is pending. Some features may be
                restricted until your account is fully verified. Please complete
                the verification process to access all features and
                functionalities of the student StudentDashboard.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contenttable}>
          <div className={styles.tableheader}>
            <h1 className={styles.headerh1}>Subjects</h1>
            <p>
              See all <IoIosArrowForward />
            </p>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <thead className={styles.tablerow}>
                <tr>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{
                      paddingLeft: "2em",
                      paddingBottom: "1.5000em",
                    }}
                  >
                    Week(s)
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{
                      paddingLeft: "2em",
                      paddingBottom: "1.5000em",
                    }}
                  >
                    Topic(s)
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingBottom: "1.5000em" }}
                  >
                    content
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
