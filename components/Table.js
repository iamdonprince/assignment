import React from "react";
import TableData from "./TableData";
import Link from "next/link";
import styles from "./table.module.css";
function Tables({ users }) {
  return (
    <table
      className={` ${styles.table} my-3 table-md table-striped table-hover`}
    >
      <thead>
        <tr>
          <th className={`${styles.th}`} scope="col">
            First Name
          </th>
          <th className={styles.th} scope="col">
            Last Name
          </th>
          <th className={styles.th} scope="col">
            Age
          </th>
          <th className={styles.th} scope="col">
            Email
          </th>
          <th className={styles.th} scope="col">
            Website
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
  );
}

export default Tables;
