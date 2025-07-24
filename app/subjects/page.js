import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";
import styles from "./page.module.css";
import SubjectsPageClient from "./SubjectsPageClient"; // ✅ Import client component

async function getSubjects() {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/subjects`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch subjects");
  return res.json();
}

export default async function SubjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className={styles.noAccess}>
        <h2>🔐 Access Required</h2>
        <p>Please login to view this page.</p>
      </div>
    );
  }

  const subjects = await getSubjects();
  const isAdmin = session.user.role === "admin";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {isAdmin ? "📚 Manage Subjects" : "📖 Available Subjects"}
        </h1>
        <p className={styles.subtitle}>
          {isAdmin
            ? "Manage and configure subjects"
            : `${subjects.length} subjects available`}
        </p>
      </div>

      {isAdmin && (
        <div className={styles.actions}>
          <Link href="/subjects/new" className={styles.addBtn}>
            <span className={styles.btnIcon}>➕</span>
            Add New Subject
          </Link>
        </div>
      )}

      {/* ✅ Render Client Component */}
      <SubjectsPageClient subjects={subjects} isAdmin={isAdmin} />
    </div>
  );
}
