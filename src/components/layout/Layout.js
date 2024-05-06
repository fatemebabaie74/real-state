// import styles from "@/layout/Layout.module.css"
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"

const Layout = ({children}) => {
    const styles = {mineight: "700px"}
  return (
    <>
   <Header/>
    <div className={styles}>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout
