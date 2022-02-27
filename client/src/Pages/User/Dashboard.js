import React from "react";
import styles from "../../Styles/UserDashboard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{user?.name}</div>
      <div className={styles.status}>
        Status :{" "}
        {user?.status === "In-Active" ? (
          <span className={styles.inactive}>In-Active</span>
        ) : user?.status === "Queued" ? (
          <span className={styles.queued}>Request In Process</span>
        ) : (
          <span className={styles.active}>Active</span>
        )}
      </div>
      <div className={styles.catalogues}>
       
      </div>
      {user?.status !== "Active" && (
        <div className={styles.btn}>
          <button className={styles.butt} disabled={user?.status === "Queued"}>
            {user?.status === "Queued"
              ? "Submitted for Activation"
              : "Request for Account Activation"}
          </button>
          {user?.status === "In-Active"
            ? `Your ${user?.name}, will be available for booking, and displayed on the website to users, after you complete your profile successfully, follwed by a verification from Admin Side.`
            : ""}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
