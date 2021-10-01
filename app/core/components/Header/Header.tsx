import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/my-bookshelf-icon.png" alt="Icona" />
      <h3>My Bookshelf</h3>
    </header>
  )
}
