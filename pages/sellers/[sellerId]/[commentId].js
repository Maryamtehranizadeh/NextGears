import { useRouter } from "next/router";

function Comment() {
  const router = useRouter();
  const { commentId, sellerId } = router.query;

  return (
    <h1>
      Comment # {commentId} | Seller # {sellerId}
    </h1>
  );
}
export default Comment;
