import Head from "next/head";
import React from "react";

import Tables from "./Table";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Paggination from "./Paggination";
import { filterArray, sortArray } from "../lib/utile";

function Layout({ children, data, home }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);
  const [inputSearch, setInputSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [sortInDesc, setSortInDesc] = useState(false);
  useEffect(() => {
    if (data == null) return;
    setUsers(data);
  }, [data]);
  //sorting array by name,email etc..
  const sortedArray = (sortBy) => {
    if (!filteredArray) return;

    const newSortedArray = sortArray(filteredArray, sortBy, sortInDesc);
    setFilteredArray(newSortedArray);

    setSortInDesc(!sortInDesc);
  };

  //  pagination : setting page Number to show data
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // next page
  const incrementPage = (pageNum) => {
    if (currentPage < pageNum) setCurrentPage(currentPage + 1);
    return;
  };

  //  previous page
  const decrementPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    return;
  };
  //handling search after clicking on search button
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitSearch(inputSearch);
  };
  // using controlled component
  const inputHandler = (e) => {
    setInputSearch(e.target.value);
  };
  // search : filtered by search
  useEffect(() => {
    if (!users) return;
    let res = filterArray(users, submitSearch);
    // let res = filterArray(users, inputSearch);

    setFilteredArray(res);
  }, [submitSearch, users]);
  //  pagination : slice data by 30 items
  const lastIndexOf = currentPage * usersPerPage;
  const firstIndexOf = lastIndexOf - usersPerPage;
  const currentUsers = filteredArray.slice(firstIndexOf, lastIndexOf);

  return (
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
            <SearchBar
              value={inputSearch}
              submitHandler={submitHandler}
              inputHandler={inputHandler}
            />
            <Tables users={currentUsers} sortArrayFun={sortedArray} />
            {filteredArray.length <= 0 ? (
              " "
            ) : (
              <Paggination
                usersPerPage={usersPerPage}
                total={filteredArray}
                currentPage={currentPage}
                changePage={changePage}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
