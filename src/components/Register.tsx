import React, { FormEvent, useState } from "react";

interface Props {
  onFormSwitch: (x: string) => void;
}

function Register({ onFormSwitch }: Props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        name: <input id="name" />
        <br />
        rating: <input id="rating" />
        <br />
        email: <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <br />
        password:{" "}
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id="password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => onFormSwitch("login")}>
        Already Have an Account Login Here
      </button>
    </>
  );
}

export default Register;
