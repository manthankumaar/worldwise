import styles from './Homepage.module.css'
import NavPage from './NavPage'

export default function PageNotFound() {
  return (
    <main className={styles.homepage}>
      <NavPage />
      <h1>Page not found 😢</h1>
    </main>
  )
}
