import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

interface Users {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: number;
  is_admin: boolean;
}

function AdminPage() {
  // get all users

  const [users, setUsers] = React.useState<Users[]>([]);

  // get all users using axios

  React.useEffect(() => {
    axios.get("http://localhost:5000/api/user").then((response) => {
      setUsers(response.data);
    });
  }, []);

  // delete user

  function deleteUser(id: string) {
    axios.delete(`http://localhost:5000/api/user/${id}`).then((response) => {
      alert(response.data.message);
      window.location.reload();
    });
  }

  // funtion to alert before deleting

  function alertDelete(id: string) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  }

  function ifItsTrue(is_admin: boolean) {
    if (is_admin === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  // display all users

  function displayUsers() {
    return users.map((user, index) => {
      return (
        <div className="userCard" key={index}>
          <div>
            <strong>First Name : </strong>
            <p className="userCard-firstname">{user.firstName}</p>
          </div>
          <div>
            <strong>Last Name : </strong>
            <p className="userCard-lastname">{user.lastName}</p>
          </div>
          <div>
            <strong>Email : </strong>
            <p className="userCard-email">{user.email}</p>
          </div>
          <div>
            <strong>Age : </strong>
            <p className="userCard-age">{user.birthday}</p>
          </div>
          <div>
            <strong>Admin : </strong>
            <p className="userCard-admin">{ifItsTrue(user.is_admin)}</p>
          </div>
          <div className="userCard-btnContainer">
            <NavLink className="userCard-more" to={`/User/${user._id}`}>
              More
            </NavLink>
            <button
              className="userCard-delete"
              onClick={() => alertDelete(user._id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <Header></Header>
      <h1>Admin Page</h1>
      <main className="content-container content-container-admin">
        {displayUsers()}
      </main>
      <Footer></Footer>
    </>
  );
}

export default AdminPage;
