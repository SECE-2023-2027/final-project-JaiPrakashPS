"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function EditSubject({ params }) {
  const router = useRouter();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchSubject = async () => {
      const res = await fetch(`/api/subjects/${params.id}`);
      const data = await res.json();
      setForm(data);
    };
    fetchSubject();
  }, [params.id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/subjects/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/subjects");
  };

  if (!form) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>✏️ Edit Subject</h1>
        <p className={styles.subHeading}>
          Update the subject details and save your changes.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Subject Name"
            className={styles.input}
            required
          />
          <input
            name="time"
            value={form.time}
            onChange={handleChange}
            placeholder="Schedule (e.g. 10-11 AM)"
            className={styles.input}
            required
          />
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="Academic Year"
            className={styles.input}
            required
          />
          <input
            name="semester"
            value={form.semester}
            onChange={handleChange}
            placeholder="Semester"
            className={styles.input}
            required
          />
          <input
            name="totalStudents"
            value={form.totalStudents}
            onChange={handleChange}
            placeholder="Total Students"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Update Subject
          </button>
        </form>
      </div>
    </div>
  );
}
