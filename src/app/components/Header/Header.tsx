import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src="/logo-vs.svg" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.headerButtons}>
          <button className={styles.headerButton}>
            en
          </button>
          <button className={styles.headerButton}>
            ru
          </button>
        </div>
      </div>
    </>
  )
}

export default Header;