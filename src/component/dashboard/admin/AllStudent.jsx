import React, { useEffect, useState } from "react";
import styles from "./css/allstudent.module.scss";
import Modal from "../../classes/modal/Modal";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetRegisteredStudents } from "../../shared/redux/slices/registeredStudent.slices";
import { ApproveStudent } from "../../shared/redux/slices/auth.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const AllStudent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const registeredStudent = useAppSelector(
    (state) => state.registration.getAllStudents
  );

  useEffect(() => {
    registeredStudents();
  }, []);

  const registeredStudents = () => {
    setLoading(true);
    dispatch(GetRegisteredStudents())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        toast.error(errorMessage);
      });
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // const handleSubmit = async () => {
  //   if (!selectedUser || !selectedStatus) return;

  //   try {
  //     setLoading(true);
  //     const body = {
  //       studentEmail: selectedUser.email,
  //       admissionStatus: selectedStatus,
  //     };
  //     await dispatch(ApproveStudent(body));
  //     setLoading(false);
  //     setShowModal(false);
  //     toast.success("Student admission status updated successfully!");
  //     registeredStudents(); // Reload registered students after status update
  //   } catch (error) {
  //     setLoading(false);
  //     const errorMessage =
  //       error.response?.data?.message ||
  //       "Failed to update student admission status";
  //     toast.error(errorMessage);
  //   }
  // };
  const handleSubmit = async () => {
    if (!selectedUser || !selectedStatus) return;
  
    try {
      setLoading(true);
      const body = {
        studentEmail: selectedUser.email,
        admissionStatus: selectedStatus,
      };
      await dispatch(ApproveStudent(body));
      setLoading(false);
      setShowModal(false);
      toast.success("Student admission status updated successfully!");
      registeredStudents(); // Reload registered students after status update
    } catch (error) {
      setLoading(false);
      console.error("Error while updating admission status:", error); // Log the error message
      const errorMessage =
        error.response?.data?.message ||
        "Failed to update student admission status";
      toast.error(errorMessage);
    }
  };
  
  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Filter students whose status is pending
  const pendingStudents = registeredStudent?.data?.filter(
    (student) => student.admission_status === "pending"
  );

  return (
    <div>
      <div className={styles.content}>
        <table className={styles.studentTable}>
          <thead>
            <tr>
              <th>Surname</th>
              <th>Other name</th>
            </tr>
          </thead>
          <tbody>
            {pendingStudents?.length > 0 ? (
              pendingStudents.map((user, index) => (
                <tr key={index} onClick={() => handleModalOpen(user)}>
                  <td>{user.surname}</td>
                  <td>{user.othernames}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="2"
                  style={{ color: "red", fontFamily: "sans-serif" }}
                >
                  No pending students available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal isOpen={showModal} onClose={closeModal}>
          <h2 className={styles.userdetails}>{selectedUser?.surname}</h2>
          <div className={styles.userDetailsContainer}>
            <ul className={styles.userDetailsList}>
              <li>
                <span className={styles.detailLabel}>Other Names:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.othernames}
                </span>
              </li>
              <li>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.email}
                </span>
              </li>
              <li>
                <span className={styles.detailLabel}>Gender:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.gender}
                </span>
              </li>
              <li>
                <span className={styles.detailLabel}>Date of Birth:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.date_of_birth}
                </span>
              </li>
              <li>
                <span className={styles.detailLabel}>Phone no:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.phone}
                </span>
              </li>
              <li>
                <span className={styles.detailLabel}> Status:</span>
                <span className={styles.detailValue}>
                  {selectedUser?.admission_status}
                </span>
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="select-container"
              style={{ width: "200px", marginRight: "10px" }}
            >
              <select
                value={selectedStatus}
                onChange={handleStatusChange}
                className={styles.statusDropdown}
                style={{
                  width: "100%",
                  height: "40px", // Increase height of select options
                  padding: "5px", // Add padding for better spacing
                  borderRadius: "5px", // Add rounded corners
                  border: "1px solid #ccc", // Add border
                }}
              >
                <option value="">Change Status</option>
                <option
                  value="admitted"
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                >
                  Admitted
                </option>
                <option
                  value="rejected"
                  style={{ backgroundColor: "#f44336", color: "white" }}
                >
                  Rejected
                </option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedStatus}
              className={styles.submitButton}
              style={{
                padding: "10px 20px",
                backgroundColor: "#052e16",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {loading ? (
                <ReactLoading
                  type="spin"
                  color="white"
                  height={20}
                  width={20}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Modal>
      )}

      <ToastContainer />
    </div>
  );
};

export default AllStudent;
