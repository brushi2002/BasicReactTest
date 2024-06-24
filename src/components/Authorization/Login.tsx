import React, { FormEvent, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface Props {
  onFormSwitch: (x: string) => void;
}

function Login({ onFormSwitch }: Props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`http://localhost:4000/api/players/${email}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          //display Error
          //tbd check password
          setAuthenticated(false);
          console.log("nope");
        }
        setAuthenticated(true);
        setEmail(email);
        navigate("/");
        console.log("yep");
        //useContext(email)
      });
  };
  const handleClick = (e: FormEvent) => {};

  return (
    <>
     
        <div className="d-flex bg-primary align-items-center justify-content-center vh-100">
          <div className="p-3 rounded bg-white w-25">
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                  />
              </div>
              <div className='mb-3'>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  id="password"
                />
              </div>
              <button className="w-100 btn btn-success rounded-0" type="submit">
                 Login
              </button>
            </form>
      </div></div>

      <button
        className="btn btn-primary"
        onClick={() => onFormSwitch("register")}
      >
        Don't have an Account? Register Here.{" "}
      </button>
    </>
  );
}

export default Login;
