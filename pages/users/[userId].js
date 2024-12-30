import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  const id = router.query.userId;
  return <h1>User # {id}</h1>;
}
export default User;
