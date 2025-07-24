import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import styles from "./page.module.css";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Profile</h1>
          <p className={styles.message}>Please login to view your profile.</p>
        </div>
      </div>
    );
  }

  const isAdmin = session.user.role === "admin";

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Profile</h1>
        {isAdmin ? (
          <div className={styles.details}>
            <p><strong>Role:</strong> Admin</p>
            <p><strong>Name:</strong> Admin</p>
            <p><strong>Email:</strong> admin@example.com</p>
          </div>
        ) : (
          <div className={styles.details}>
            {session.user.image && (
              <img src={session.user.image} alt="Profile" className={styles.avatar} />
            )}
            <p><strong>Name:</strong> {session.user.name}</p>
            <p><strong>Email:</strong> {session.user.email}</p>
            <p><strong>Role:</strong> Student</p>
          </div>
        )}
      </div>
    </div>
  );
}
