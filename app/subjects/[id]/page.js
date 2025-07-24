"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SubjectDetail({ params }) {
  // ✅ Ignore warning: Directly using params.id (safe for now)
  const subjectId = params.id;

  const { data: session } = useSession();
  const router = useRouter();
  const [subject, setSubject] = useState(null);
  const [hasMarked, setHasMarked] = useState(false);

  useEffect(() => {
    const fetchSubject = async () => {
      const res = await fetch(`/api/subjects/${subjectId}`);
      const data = await res.json();
      setSubject(data);
    };

    const checkAttendance = async () => {
      if (!session) return;
      const res = await fetch(
        `/api/attendance/check?userId=${session.user.email}&subjectId=${subjectId}`
      );
      const data = await res.json();
      setHasMarked(data.exists);
    };

    fetchSubject();
    if (session) checkAttendance();
  }, [subjectId, session]);

  const handleAttendance = async () => {
    const res = await fetch("/api/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: session.user.email,
        subjectId,
      }),
    });
    if (res.ok) {
      setHasMarked(true);
      alert("Attendance marked!");
    }
  };

  if (!subject) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>{subject.name}</h1>
        <div className={styles.info}>
          <p><strong>Time:</strong> {subject.time}</p>
          <p><strong>Year:</strong> {subject.year}</p>
          <p><strong>Semester:</strong> {subject.semester}</p>
          <p><strong>Total Students:</strong> {subject.totalStudents}</p>
        </div>

        {!hasMarked ? (
          <button onClick={handleAttendance} className={styles.attendBtn}>
            ✅ Mark Attendance
          </button>
        ) : (
          <p className={styles.marked}>✔ Attendance already marked</p>
        )}
      </div>
    </div>
  );
}
