import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import Footer from '@/app/ui/dashboard/footer/footer'
import styles from './dashboard.module.css'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
