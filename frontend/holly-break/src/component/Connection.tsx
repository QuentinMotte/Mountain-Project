import React from "react";

type connect = {
  isOpen: boolean;
  setIsOpen: any;
};

function Connection({ isOpen, setIsOpen }: connect) {
  return (
    <>
      <div className="connection_form_container">
        <div className="connection_form_subContainer">
          <i
            className="fa-solid fa-square-xmark"
            onClick={() => setIsOpen(false)}
          ></i>
          <form action="" method="get" className="form_Container">
            <h1>Login In</h1>
            <div className="form_subContainer">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="on"
                id="loginEmail"
              />
            </div>
            <div className="form_subContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                id="loginPass"
              />
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Connection;
