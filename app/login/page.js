'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  async function handleAdminLogin(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result.error) {
      setError('Invalid admin credentials');
    } else {
      router.push('/dashboard');
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🎓</span>
          </div>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Select your role to continue</p>
        </div>

        <div className={styles.roleSection}>
          <h2 className={styles.sectionTitle}>Student Access</h2>
          <button
            className={styles.githubBtn}
            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
          >
            <span className={styles.githubIcon}>📚</span>
            Continue with GitHub
          </button>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerText}>or</span>
        </div>

        <div className={styles.adminSection}>
          <h2 className={styles.sectionTitle}>Administrator</h2>
          <form onSubmit={handleAdminLogin} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
                autoComplete="username"
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
                autoComplete="current-password"
              />
            </div>
            <button 
              type="submit" 
              className={styles.loginBtn}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In as Admin'}
            </button>
          </form>
          {error && (
            <div className={styles.errorAlert}>
              <span className={styles.errorIcon}>⚠️</span>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}