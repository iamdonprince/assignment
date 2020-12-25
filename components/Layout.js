import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
import Tables from "./Table";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Paggination from "./Paggination";
export const CreateTableContext = React.createContext();
function Layout({ children, data, home }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);

  useEffect(() => {
    if (data == null) return;
    setUsers(data);
  }, [data]);
  const lastIndexOf = currentPage * usersPerPage;
  const firstIndexOf = lastIndexOf - usersPerPage;
  const currentUsers = users.slice(firstIndexOf, lastIndexOf);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const incrementPage = (pageNum) => {
    if (currentPage < pageNum) setCurrentPage(currentPage + 1);
    return;
  };
  const decrementPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    return;
  };

  return (
    <CreateTableContext.Provider value={{ user: data }}>
      <div>
        <Head>
          <title>Create Next App</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
        </Head>

        <div className="container mt-5">
          <main>{children}</main>
          {home && (
            <div>
              <SearchBar />
              <Tables users={currentUsers} />
              <Paggination
                usersPerPage={usersPerPage}
                total={users}
                currentPage={currentPage}
                changePage={changePage}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
              />
            </div>
          )}
        </div>
      </div>
    </CreateTableContext.Provider>
  );
}

export default Layout;
