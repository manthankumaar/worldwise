import styles from './Footer.module.css'
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy;{`copyRight ${new Date().getFullYear()}`} by WorldWise Inc.
      </p>
    </footer>
  )
}
