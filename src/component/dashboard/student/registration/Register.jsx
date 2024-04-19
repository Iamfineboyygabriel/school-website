import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { RegisterStudent } from "../../../shared/redux/slices/auth.slices";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import styles from "./registration.module.scss";

const Register = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    surname: "",
    othernames: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    student_class: "",
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    surname: false,
    othernames: false,
    email: false,
    phone: false,
    gender: false,
    dob: false,
    student_class: false,
  });
  const dispatch = useDispatch();

  const registerStudent = useAppSelector((state) => state.auth.registerStudent);

  const registerStudentData = async () => {
    setLoading(true);

    // **Validation Logic:**
    const isEmpty = Object.values(registrationDetails).some(
      (value) => value === ""
    );
    if (isEmpty) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }
    //EMAIL VALIDATION LOGIC
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(registrationDetails.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    const { surname, othernames, email, phone, gender, dob, student_class } =
      registrationDetails;
    let body = {
      surname,
      othernames,
      email,
      phone,
      gender,
      dob,
      student_class,
    };

    dispatch(RegisterStudent(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        toast.success(
          "Your registration was successful! Your admission status is pending."
        );
        // Clear input fields
        setRegistrationDetails({
          surname: "",
          othernames: "",
          email: "",
          phone: "",
          gender: "",
          dob: "",
          student_class: "",
        });
      })
      .catch((err) => {
        const errorMessage =
          err.response.data.message || "An error occurred during registration";
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      toast.error("Please select a valid date of birth");
    } else {
      setRegistrationDetails({
        ...registrationDetails,
        dob: e.target.value,
      });
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.discone}>
          <h2 className={styles.headleftimg}>
            Register to access your student account. Join our school community
            with ease.
          </h2>
        </div>
        <div className={styles.disctwo}>
          <div className={styles.insidedisc}>
            <h2 className={styles.headcontent}>Create a Student account</h2>
            <div className={styles.arrowstyle}>{/* Arrow icon */}</div>
            <h2 className={styles.headinner}>
              Carefully fill in the right credentials.
            </h2>
            <div className={styles.decidebutton}>
              <div className={styles.formholder}>
                <div className={styles.formholderone}>
                  <h2 className={styles.rowname}>Surname</h2>
                  <input
                    className={`${styles.calculatorinput} ${
                      errors.surname ? styles.error : ""
                    }`}
                    type="text"
                    placeholder="Enter your Surname"
                    value={registrationDetails.surname}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        surname: e.target.value,
                      })
                    }
                  />
                  <h2 className={styles.rowname}>Email</h2>
                  <input
                    className={`${styles.calculatorinput} ${
                      errors.email ? styles.error : ""
                    }`}
                    type="email"
                    placeholder="Enter your Email"
                    value={registrationDetails.email}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        email: e.target.value,
                      })
                    }
                  />
                  {/* Gender Input */}
                  <h2 className={styles.rowname}>Gender</h2>
                  <select
                    className={`${styles.calculatorinput} ${
                      errors.gender ? styles.error : ""
                    }`}
                    value={registrationDetails.gender}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        gender: e.target.value.toLowerCase(),
                      })
                    }
                  >
                    <option value="">Select Gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>

                  {registrationDetails.photo_url && (
                    <img
                      src={registrationDetails.photo_url}
                      alt="Selected"
                      style={{ width: "100%", marginTop: "1rem" }}
                    />
                  )}
                  {/* Class Input */}
                  <h2 className={styles.rowname}>Class</h2>
                  <select
                    className={`${styles.calculatorinput} ${
                      errors.student_class ? styles.error : ""
                    }`}
                    value={registrationDetails.student_class}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        student_class: e.target.value.toUpperCase(),
                      })
                    }
                  >
                    <option value="">Select Class</option>
                    <option value="JSS1">JSS1</option>
                    <option value="JSS2">JSS2</option>
                    <option value="JSS3">JSS3</option>
                    <option value="SSS1">SSS1</option>
                    <option value="SSS2">SSS2</option>
                    <option value="SSS3">SSS3</option>
                  </select>
                </div>
                <div className={styles.formholdertwo}>
                  <h2 className={styles.rowname}>Other names</h2>
                  <input
                    className={`${styles.calculatorinput} ${
                      errors.othernames ? styles.error : ""
                    }`}
                    type="text"
                    placeholder="Enter your Other names"
                    value={registrationDetails.othernames}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        othernames: e.target.value,
                      })
                    }
                  />
                  <h2 className={styles.rowname}>Phone</h2>
                  <input
                    className={`${styles.calculatorinput} ${
                      errors.phone ? styles.error : ""
                    }`}
                    type="text"
                    placeholder="Enter your Phone"
                    value={registrationDetails.phone}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        phone: e.target.value,
                      })
                    }
                  />
                  <h2 className={styles.rowname}>Date of Birth</h2>
                  <input
                    className={`${styles.calculatorinput} ${
                      errors.dob ? styles.error : ""
                    }`}
                    type="date"
                    max={new Date().toISOString().split("T")[0]} // Disable future dates
                    value={registrationDetails.dob}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.continuebutton}>
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  onClick={registerStudentData}
                >
                  {loading ? (
                    <ReactLoading
                      color="white"
                      width={25}
                      height={25}
                      type="spin"
                    />
                  ) : (
                    "Create account"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
