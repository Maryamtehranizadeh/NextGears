import { useRouter } from "next/router";
function Seller() {
  const router = useRouter();
  console.log(router);
  return <h1>Seller # {router.query.sellerId}</h1>;
}
export default Seller;
