import React from "react";
import TableData from "./TableData";

import styles from "./table.module.css";
function Tables({ users, sortArrayFun }) {
  if (users.length <= 0) {
    return (
      <div className="alert alert-dismissible my-3 alert-light">
        Data Not Fount
      </div>
    );
  }
  return (
    <div className="table-responsive">
      <table
        className={` ${styles.table} my-3 table-md table-striped table-hover table-bordered table-sm`}
      >
        <thead>
          <tr>
            <th
              className={`${styles.th}  `}
              scope="col"
              onClick={() => sortArrayFun("first_name")}
            >
              First Name
              <span className={`${styles.span}`}>
                <i
                  className={`fa fa-caret-up ${styles.down}  `}
                  aria-hidden="true"
                ></i>
                <i
                  className={`fa fa-caret-down ${styles.up}  `}
                  aria-hidden="true"
                ></i>
              </span>
            </th>
            <th
              className={styles.th}
              scope="col"
              onClick={() => sortArrayFun("last_name")}
            >
              Last Name
              <span className={`${styles.span}`}>
                <i
                  className={`fa fa-caret-up ${styles.down}  `}
                  aria-hidden="true"
                ></i>
                <i
                  className={`fa fa-caret-down ${styles.up}  `}
                  aria-hidden="true"
                ></i>
              </span>
            </th>
            <th
              className={styles.th}
              scope="col"
              onClick={() => sortArrayFun("age")}
            >
              Age
              <span className={`${styles.span}`}>
                <i
                  className={`fa fa-caret-up ${styles.down}  `}
                  aria-hidden="true"
                ></i>
                <i
                  className={`fa fa-caret-down ${styles.up}  `}
                  aria-hidden="true"
                ></i>
              </span>
            </th>
            <th
              className={styles.th}
              scope="col"
              onClick={() => sortArrayFun("email")}
            >
              Email
              <span className={`${styles.span}`}>
                <i
                  className={`fa fa-caret-up ${styles.down}  `}
                  aria-hidden="true"
                ></i>
                <i
                  className={`fa fa-caret-down ${styles.up}  `}
                  aria-hidden="true"
                ></i>
              </span>
            </th>
            <th
              className={styles.th}
              scope="col"
              onClick={() => sortArrayFun("web")}
            >
              Website
              <span className={`${styles.span}`}>
                <i
                  className={`fa fa-caret-up ${styles.down}  `}
                  aria-hidden="true"
                ></i>
                <i
                  className={`fa fa-caret-down ${styles.up}  `}
                  aria-hidden="true"
                ></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="p-2 mx-3" key={user.id}>
              <TableData userName={user.first_name} id={user.id} />

              <TableData value={user.last_name} />
              <TableData value={user.age} />
              <TableData value={user.email} />

              <TableData value={user.web} web={user.web} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
