// rfce
import { useState } from "react";

import Profile from "../components/Profile";
// import Header from "../components/Header";

import publicFormIcon from "/form-icon.png";
import assetsFormIcon from "../assets/form-icon.png";

interface IUser {
  name: string;
  address: string;
}
// type Status = "loading" | "success" | "failed";
interface IForm {
  name?: string;
  address?: string;
}

function Function() {
  // const [status, setStatus] = useState<Status>("loading");
  // setStatus("")
  const [user, setUser] = useState<IUser>({ name: "", address: "" });
  const [form, setForm] = useState<IForm>({});
  function getUser() {
    setUser({
      name: "Budi",
      address: "Jakarta",
    });
  }
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    if (e.target.value === "") delete (newFormState as Record<string, string | undefined>)[e.target.name];
    setForm(newFormState);
  }
  function onSubmitHandler() {
    const newUser = {
      ...user, // {user: "andi", address: "jakarta"}
      ...form,
    };
    setUser(newUser);
    setForm({});
  }
  function onDeleteHandler() {
    setUser({ name: "", address: "" });
  }
  return (
    <>
      {/* <Header /> */}
      <div style={{ marginBottom: "100px" }}>
        <img src={publicFormIcon} alt="form-icon" />
        <img src={assetsFormIcon} alt="form-icon" />
        <button style={{ display: "block", width: "100%" }} onClick={getUser}>
          Get User
        </button>
        <form style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <label htmlFor="user-name">Name</label>
          <input type="text" id="user-name" name="name" value={form.name || ""} onChange={onInputChange} />
          <label htmlFor="user-address">Address</label>
          <input type="text" id="user-address" name="address" value={form.address || ""} onChange={onInputChange} />
          <button type="button" onClick={onSubmitHandler}>
            Change User
          </button>
        </form>
        <button onClick={onDeleteHandler}>Delete User</button>
        {user.name && user.address && <Profile name={user.name} address={user.address} />}
      </div>
    </>
  );
}

export default Function;
