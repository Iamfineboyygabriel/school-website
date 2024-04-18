import React, { useEffect, useState } from "react";
import styles from "./css/allstudent.module.scss";
import Modal from "../../classes/modal/Modal";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetRegisteredStudents } from "../../shared/redux/slices/registeredStudent.slices";
import { ApproveStudent } from "../../shared/redux/slices/auth.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <div>
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className={styles.statusDropdown}
            >
              <option value="">Change Status</option>
              <option value="admitted">Admitted</option>
              <option value="rejected">Rejected</option>
            </select>
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={!selectedStatus || loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllStudent;
