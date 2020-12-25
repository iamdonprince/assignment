import React from "react";

function Paggination({
  currentPage,
  usersPerPage,
  changePage,
  total,
  incrementPage,
  decrementPage,
}) {
  const pages = [];

  for (let i = 1; i <= total.length / usersPerPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className="pagination pagination-sm">
        <li className="page-item" onClick={decrementPage}>
          <button className="page-link">&laquo;</button>
        </li>
        {pages &&
          pages.map((page, i) => {
            return (
              <li
                className={`page-item   ${
                  page === currentPage ? "active" : ""
                }`}
                key={i}
                onClick={() => changePage(page)}
              >
                <button className="page-link">{page}</button>
              </li>
            );
          })}

        <li className="page-item" onClick={() => incrementPage(pages.length)}>
          <button className="page-link">&raquo;</button>
        </li>
      </ul>
    </div>
  );
}

export default Paggination;
