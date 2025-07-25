import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import styles from "./page.module.css";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className={styles.noSession}>
        <div className={styles.noSessionCard}>
          <h2>🔐 Access Required</h2>
          <p>
            Please{" "}
            <Link href="/login" className={styles.loginLink}>
              sign in
            </Link>{" "}
            to continue
          </p>
        </div>
      </div>
    );
  }

  const isAdmin = session.user.role === "admin";

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1 className={styles.heading}>
            {isAdmin ? "🛠️ Admin Dashboard" : "📚 Student Dashboard"}
          </h1>
          <p className={styles.subheading}>
            {isAdmin ? "Manage attendance system" : "Track your attendance"}
          </p>
        </div>

        {!isAdmin && (
          <div className={styles.userCard}>
            <img src={session.user.image || "/default-avatar.png"} alt="Avatar" className={styles.avatar} />
            <div className={styles.userInfo}>
              <p className={styles.username}>Welcome back, {session.user.name}</p>
              <span className={styles.userRole}>Student</span>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <Link href="/subjects" className={styles.linkBtn}>
            <span className={styles.btnIcon}>📖</span>
            {isAdmin ? "Manage Subjects" : "View Subjects"}
          </Link>

          {isAdmin && (
            <Link href="/subjects/new" className={styles.addBtn}>
              <span className={styles.btnIcon}>➕</span>
              Add New Subject
            </Link>
          )}
        </div>

        {!isAdmin && (
          <div className={styles.termsBox}>
            <div className={styles.termsHeader}>
              <h2>📋 Attendance Guidelines</h2>
            </div>
            <div className={styles.termsList}>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Attend full class session to mark attendance</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>False marking may result in penalties</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>One attendance entry per subject per day</span>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Violations may lead to suspension</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}