// rfce
import { useState } from "react";

import publicFormIcon from "/form-icon.png";
import assetsFormIcon from "../assets/form-icon.png";

function Profile(props: { name: string; address: string }): JSX.Element {
  return (
    <>
      <p>nama: {props.name}</p>
      <p>domisili: {props.address}</p>
    </>
  );
}

interface IUser {
  id: number;
  name: string;
  address: string;
}
// type Status = "loading" | "success" | "failed";

function Function() {
  // const [status, setStatus] = useState<Status>("loading");
  // setStatus("")
  const [user, setUser] = useState<IUser>();
  // const user = {
  //   id: 1,
  //   name: "Budi",
  //   address: "Jakarta",
  // };
  function getUser() {
    setUser({
      id: 1,
      name: "Budi",
      address: "Jakarta",
    });
  }
  return (
    <div>
      <img src={publicFormIcon} alt="form-icon" />
      <img src={assetsFormIcon} alt="form-icon" />
      <button style={{ display: "block", width: "100%" }} onClick={getUser}>
        Get User
      </button>
      {user && (
        <>
          <p>nama: {user.name}</p>
          <p>domisili: {user.address}</p>
          {/* {Profile(user)} */}
          <Profile name={user.name} address={user.address} />
        </>
      )}
    </div>
  );
}

export default Function;
