import React from "react";
import styles from "./schemeofwork.module.scss";
import { GetLessons } from "../../shared/redux/slices/GetLessons.slices";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SchemeOfWork = () => {
  return (
    <div>
      <h2>All Contents</h2>

      <div className={styles.schemeOfWorkTable}>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Class</th>
              <th>Term</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Content</th>
              <th>Document</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchemeOfWork;
