import Link from "next/link";
const users = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
];
function Users() {
  return (
    <>
      <h1>Users' List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            <Link href={`/users/${user.id}`}>User {user.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
