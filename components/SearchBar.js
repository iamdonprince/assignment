import React, { useContext } from "react";
import { CreateTableContext } from "./Layout";

function SearchBar() {
  //   const user = useContext(CreateTableContext);

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      ></input>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
