// import React, { useState } from "react";
// import styles from "../student/changepassword.module.scss";
// import { ToastContainer, toast } from "react-toastify";
// import ReactLoading from "react-loading";
// import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
// import { ResetAdminPassword } from "../../shared/redux/slices/auth.slices";

// const AdminResetPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);A
//   const dispatch = useAppDispatch();

//   const resetAdminPassword = useAppSelector(
//     (state) => state.auth.resetAdminPassword
//   );
//   console.log("here", resetAdminPassword);
//   const resetAdminData = () => {
//     setLoading(true);
//     let body = {
//       email,
//     };
//     dispatch(ResetAdminPassword(body))
//       .unwrap()
//       .then(() => {
//         setLoading(false);
//       })
//       .catch((err) => {
//         const errorMessage = err.errorMessage;
//         toast.error(errorMessage);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.form}>
//         <div className={styles.inputGroup}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             placeholder="Kindly input your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button onClick={resetAdminData} className={styles.submitButton}>
//           {loading ? (
//             <ReactLoading color="white" width={25} height={25} type="spin" />
//           ) : (
//             "Submit"
//           )}
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminResetPassword;

import React from "react";

const AdminResetPassword = () => {
  return <div>AdminResetPassword</div>;
};

export default AdminResetPassword;
