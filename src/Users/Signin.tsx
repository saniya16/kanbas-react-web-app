import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input placeholder="username" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
        <br/>
        <br/>
      <input placeholder="password" type="password" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
        <br/>
        <br/>
      <button className="btn btn-primary mb-3" style={{ width: "14%" }} onClick={signin}> Signin </button>
      <br/>
      Don't have an account? <Link to="/Kanbas/Account/Signup" style={{textDecoration:"none"}}>
    Sign Up.
  </Link>
    </div>
  );
}

