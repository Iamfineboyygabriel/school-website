// import React, { useEffect, useState } from "react";
// import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
// import { GetSubjects } from "../../shared/redux/slices/GetStudentSubjects.slices";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const GetClassSubject = () => {
//   const [loading, setLoading] = useState(true);
//   const [selectedClass, setSelectedClass] = useState("");
//   const dispatch = useAppDispatch();
//   const subjects = useAppSelector((state) => state.subjects);

//   useEffect(() => {
//     if (selectedClass) {
//       setLoading(true);
//       dispatch(GetSubjects(selectedClass))
//         .unwrap()
//         .then(() => {
//           setLoading(false);
//         })
//         .catch((err) => {
//           const errorMessage = err.message;
//           toast.error(errorMessage);
//           console.error("Error fetching class subjects:", errorMessage);
//         });
//     }
//   }, [dispatch, selectedClass]);

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <h2>Class Subjects</h2>
//       <label htmlFor="classSelect">Select Class:</label>
// <select
//   id="classSelect"
//   value={selectedClass}
//   onChange={handleClassChange}
//   style={{ width: "150px" }} // Set the width of the drop-down
// >
//   <option value="">Select a class</option>
//   <option value="JSS1">JSS1</option>
//   <option value="JSS2">JSS2</option>
//   <option value="JSS3">JSS3</option>
//   <option value="SSS1">SSS1</option>
//   <option value="SSS2">SSS2</option>
//   <option value="SSS3">SSS3</option>
// </select>
//       {loading ? (
//         <p>Loading...</p>
//       ) : subjects.status !== "OK" ? (
//         <p>{subjects.message}</p>
//       ) : subjects.data.length === 0 ? (
//         <p>No data available</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
// <th>Subject Name</th>
// <th>Class Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjects.subjects.subjects.data.map((subject, index) => (
//               <tr key={index}>
// <td style={{ color: "black" }}>
//   {subject.subjects.subject_name}
// </td>
// <td>{subject.class_name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default GetClassSubject;

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { GetSubjects } from "../../shared/redux/slices/GetStudentSubjects.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../student/schemeofwork.module.scss";

const GetClassSubject = () => {
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState("");
  const dispatch = useAppDispatch();
  const subjects = useAppSelector((state) => state.subjects);
  console.log("subject", subjects);
  useEffect(() => {
    if (selectedClass) {
      setLoading(true);
      dispatch(GetSubjects(selectedClass))
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          const errorMessage = err.message;
          toast.error(errorMessage);
          console.error("Error fetching class subjects:", errorMessage);
        });
    }
  }, [dispatch, selectedClass]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <div>
      <h2>Get Class Subjects</h2>
      <select
        id="classSelect"
        value={selectedClass}
        onChange={handleClassChange}
        style={{ width: "200px" }}
      >
        <option value="">Select a class</option>
        <option value="JSS1">JSS1</option>
        <option value="JSS2">JSS2</option>
        <option value="JSS3">JSS3</option>
        <option value="SSS1">SSS1</option>
        <option value="SSS2">SSS2</option>
        <option value="SSS3">SSS3</option>
      </select>

      <div className={styles.schemeOfWorkTable}>
        <table>
          <thead>
            <tr>
              <th>Subject_ID</th>
              <th>Subject Name</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.subjects?.subjects?.data.map((subject, index) => (
              <tr key={index}>
                <td style={{ color: "black" }}>{subject?.subject_id}</td>
                <td style={{ color: "black" }}>{subject?.subject_name}</td>
                <td>{subject?.class_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetClassSubject;
