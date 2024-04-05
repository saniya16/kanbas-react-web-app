import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({_id:"", username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    if (account !== null && account.dob && account.dob !== "") {
        account.dob = new Date(account.dob).toISOString().split("T")[0];
      }
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <input placeholder="username" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })}/>
            <br/>
            <br/>
          <input placeholder="password" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })}/>
            <br/>
            <br/>
          <input placeholder="first name" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })}/>
            <br/>
            <br/>
          <input placeholder="last name" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })}/>
            <br/>
            <br/>
          <input placeholder="dob" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
            <br/>
            <br/>
          <input placeholder="email" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })}/>
            <br/>
            <br/>
          <select onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br/>
          <br/>
          <button className="btn btn-primary mb-3" onClick={save}>
     Save
  </button>
  <br/>
  <button className="btn btn-danger mb-3" onClick={signout}>
    Signout
  </button>
  <br/>
  <br/>
  <Link to="/Kanbas/Account/Admin/Users"
    className="btn btn-warning w-100 me-2">
    Users
  </Link>
        </div>
      )}
    </div>
  );
}
