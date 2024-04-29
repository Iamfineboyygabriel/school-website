import React, { useEffect } from "react";
import styles from "./schemeofwork.module.scss";
import { GetLessons } from "../../shared/redux/slices/GetLessons.slices";
import { useAppSelector, useAppDispatch } from "../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import { lessonsSliceActions } from "../../shared/redux/slices/GetLessons.slices";
import "react-toastify/dist/ReactToastify.css";

const SchemeOfWork = () => {
  const dispatch = useAppDispatch();
  const { status, error, lessons } = useAppSelector(
    (state) => state.studentLesson
  );
  const { data, message } = lessons;

  useEffect(() => {
    dispatch(GetLessons())
      .unwrap()
      .catch((err) => {
        console.log(err, "err");
        console.log(error, "error occurred");
      });
  }, []);

  useEffect(() => {
    if (status === "isSuccess") {
      toast.success(message, {
        position: "top-right",
      });
    }
    () => {
      dispatch(lessonsSliceActions.reset());
    };
  }, [status]);

  console.log(lessons);
  return (
    <div>
      <h2>All Contents</h2>
      {status === "isLoading" ? (
        <h2>get subject scheme of work...</h2>
      ) : status === "isError" ? (
        <h2>error fetching data</h2>
      ) : null}

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
            {data && data.length > 1 ? (
              data.map((sub, i) => (
                <tr key={i}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            ) : data && data.length === 0 ? (
              <p>no available lessons yet..</p>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchemeOfWork;
