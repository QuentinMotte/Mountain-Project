import React from "react";
import axios from "axios";

type connect = {
  isOpen: boolean;
  setIsOpen: any;
};

interface UserConnection {
  email: string;
  password: string;
}

function Connection({ isOpen, setIsOpen }: connect) {
  const [user, setUser] = React.useState<UserConnection>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/user/login", {
      email: user.email,
      password: user.password,
    });
    console.log(response);
  }

  return (
    <>
      <div className="connection_form_container">
        <div className="connection_form_subContainer">
          <i
            className="fa-solid fa-square-xmark"
            onClick={() => setIsOpen(false)}
          ></i>

          <form className="form_Container">
            <h1>Login In</h1>

            <div className="form_subContainer">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="on"
                id="emailLogin"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_subContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                id="loginPass"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_subContainer">
              <button type="submit" name="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Connection;
