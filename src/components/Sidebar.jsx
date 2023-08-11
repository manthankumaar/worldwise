import { Footer } from './Footer'
import AppNav from './AppNav'
import styles from './Sidebar.module.css'
import Logo from './Logo'
import { Outlet } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Sidebar
