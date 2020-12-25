import React from "react";

function DetailPage({ user }) {
  return (
    <div>
      {!user ? (
        <h1>Loading</h1>
      ) : (
        <ul className="list-group">
          <li className="list-group-item   align-items-center">
            First Name : <strong>{user.first_name}</strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            Last Name : <strong> {user.last_name} </strong>
          </li>
          <li className="list-group-item   align-items-center">
            Age : <strong>{user.age}</strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            Email : <strong>{user.email}</strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            Company Name : <strong>{user.company_name}</strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            City : <strong>{user.city} </strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            State : <strong>{user.state} </strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            URL : <strong>{user.web} </strong>{" "}
          </li>
          <li className="list-group-item   align-items-center">
            Zip : <strong>{user.zip} </strong>{" "}
          </li>
        </ul>
      )}
    </div>
  );
}

export default DetailPage;
