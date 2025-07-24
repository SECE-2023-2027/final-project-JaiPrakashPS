"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function AddSubjectPage() {
  const [form, setForm] = useState({
    name: "",
    time: "",
    year: "",
    semester: "",
    totalStudents: "",
  });
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/subjects");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}> Add New Subject</h1>
        <p className={styles.subHeading}>
          Fill in the details to create a new subject.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input} name="name" placeholder="Subject Name" onChange={handleChange} required
          />
          <input
            className={styles.input} name="time" placeholder="Schedule (e.g. 10-11 AM)" onChange={handleChange} required
          />
          <input
            className={styles.input} name="year" placeholder="Academic Year (e.g. Third Year)" onChange={handleChange} required
          />
          <input
            className={styles.input} name="semester" placeholder="Semester (e.g. V)" onChange={handleChange} required
          />
          <input
            className={styles.input} name="totalStudents" placeholder="Total Students" onChange={handleChange} required
          />
          <button type="submit" className={styles.submitBtn}>
            Add Subject
          </button>
        </form>
      </div>
    </div>
  );
}
