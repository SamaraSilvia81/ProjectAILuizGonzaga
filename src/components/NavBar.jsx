import { Link } from "react-router-dom";
import { BsRobot } from 'react-icons/bs';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>
        <Link to="/" className={styles.link}>
          <BsRobot /> IA Luiz Gonzaga
        </Link>
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;