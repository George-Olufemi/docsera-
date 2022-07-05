import styles from '../styles/Home.module.css'

function Navbar() {
  return(
    <>
        <div className={styles.navbar}>
        {/* logo */}
            <div className={styles.logo}>
                <img src="/Group 20.png" alt="Docsera" />
            </div>
        {/*  */}
            <div className={styles.links}>
                <button className={styles.button1}>Sign in</button>
                <button className={styles.button2}>Sign in</button>
            </div>
        </div>
    </>
  );
}

export default Navbar;