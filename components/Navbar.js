
'use client';
import { signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/dashboard" className={styles.logo}>
          📚 Attendance Pro
        </Link>
      </div>

      <div className={styles.right}>
        {status === "loading" ? (
          <p className={styles.loadingText}>Loading...</p>
        ) : session ? (
          <>
            <span className={styles.welcome}>Hello, {session.user?.name || 'User'}</span>
            <Link href="/dashboard" className={styles.navBtn}>
              Dashboard
            </Link>
            <Link href="/profile" className={styles.navBtn}>
              Profile
            </Link>
            <button className={styles.navBtn} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}