import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Air Gears </h1>
      <ul>
        <li>
          <Link href="/sellers">Go to Sellers' page</Link>
        </li>
        <li>
          <Link href="/gears">Go to Gears' page</Link>
        </li>
        <li>
          <Link href="/users" replace>
            Go to Users' page
          </Link>
        </li>
      </ul>
    </div>
  );
}
