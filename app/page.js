import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🎓</span>
            </div>
            <h1 className={styles.title}>Semester Attendance Calculator</h1>
            <p className={styles.subtitle}>
              Streamline student attendance management with intelligent tracking, 
              real-time analytics, and comprehensive reporting tools.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>👥</span>
              <h3 className={styles.featureTitle}>Smart Tracking</h3>
              <p className={styles.featureDesc}>Automated attendance monitoring with real-time updates</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>📊</span>
              <h3 className={styles.featureTitle}>Analytics</h3>
              <p className={styles.featureDesc}>Detailed insights and performance metrics</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🔐</span>
              <h3 className={styles.featureTitle}>Secure</h3>
              <p className={styles.featureDesc}>Enterprise-grade security and data protection</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <a href="/login" className={styles.ctaButton}>
              <span className={styles.buttonIcon}>🚀</span>
              Get Started
            </a>
          </div>

          <div className={styles.termsBox}>
            <div className={styles.termsHeader}>
              <span className={styles.termsIcon}>🛡️</span>
              <h2>Terms & Guidelines</h2>
            </div>
            <div className={styles.termsList}>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <div className={styles.termContent}>
                  <h4>Subject Access Control</h4>
                  <p>Attendance marking restricted to assigned subjects only</p>
                </div>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <div className={styles.termContent}>
                  <h4>Usage Policy</h4>
                  <p>Misuse of the system will result in disciplinary measures</p>
                </div>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <div className={styles.termContent}>
                  <h4>Administrative Rights</h4>
                  <p>Admin reserves rights to edit or delete attendance records</p>
                </div>
              </div>
              <div className={styles.termItem}>
                <span className={styles.checkIcon}>✓</span>
                <div className={styles.termContent}>
                  <h4>Data Confidentiality</h4>
                  <p>All data is confidential and sharing outside is prohibited</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}