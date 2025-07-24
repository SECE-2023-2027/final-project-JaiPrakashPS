"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function SubjectsPageClient({ subjects, isAdmin }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    console.log("Delete clicked:", id); // Debug
    if (!confirm("Are you sure you want to delete this subject?")) return;

    try {
      const res = await fetch(`/api/subjects/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Subject deleted successfully");
        router.refresh(); // Refresh page after delete
      } else {
        const errorData = await res.json();
        alert("Failed to delete: " + errorData.error);
      }
    } catch (error) {
      console.error("Error deleting subject:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Year</th>
            <th>Semester</th>
            <th>{isAdmin ? "Actions" : "Attendance"}</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((sub) => (
            <tr key={sub._id}>
              <td>{sub.name}</td>
              <td>{sub.time}</td>
              <td>{sub.year}</td>
              <td>{sub.semester}</td>
              <td>
                {isAdmin ? (
                  <div className={styles.actionBtns}>
                    <Link
                      href={`/subjects/${sub._id}/edit`}
                      className={styles.editBtn}
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(sub._id)}
                      className={styles.deleteBtn}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                ) : (
                  <Link href={`/subjects/${sub._id}`} className={styles.viewBtn}>
                    📝 Mark Attendance
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {subjects.length === 0 && (
        <div className={styles.emptyState}>
          <h3>No Subjects Found</h3>
          <p>
            {isAdmin
              ? "Start by adding your first subject."
              : "No subjects are currently available."}
          </p>
        </div>
      )}
    </div>
  );
}
