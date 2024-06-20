import { useEffect } from "react";

function Profile(props: { name: string; address: string }): JSX.Element {
  useEffect(() => {
    console.log("profile changes");
  });
  useEffect(() => {
    console.log("name changes");
  }, [props.name]);
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);
  return (
    <>
      <p>nama: {props.name}</p>
      <p>domisili: {props.address}</p>
    </>
  );
}

export default Profile;
