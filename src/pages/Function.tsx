// rfce
function Profile(name: string, address: string): JSX.Element {
  return (
    <div>
      <p>nama: {name}</p>
      <p>domisili: {address}</p>
    </div>
  );
}

function Function() {
  const user = {
    id: 1,
    name: "Budi",
    address: "Jakarta",
  };
  return (
    <div>
      <p>nama: {user.name}</p>
      <p>domisili: {user.address}</p>
      {Profile(user.name, user.address)}
      {/* <Profile /> */}
    </div>
  );
}

export default Function;
