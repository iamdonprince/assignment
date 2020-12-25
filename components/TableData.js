import Link from "next/link";
import React from "react";

function TableData({ value, web, id, userName }) {
  if (web) {
    return (
      <td>
        <a href={web}>{web}</a>
      </td>
    );
  } else if (userName) {
    return (
      <td>
        <Link href={`/users/${id}`}>
          <a style={{ textDecoration: "none", color: "inherit" }}>{userName}</a>
        </Link>
      </td>
    );
  }
  return <td>{value}</td>;
}

export default TableData;
