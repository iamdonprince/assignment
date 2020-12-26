import React from "react";

function SearchBar({ inputHandler, value, submitHandler }) {
  return (
    <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        value={value}
        required
        onChange={inputHandler}
      ></input>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
