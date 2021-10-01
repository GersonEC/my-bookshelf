import styles from "./Categories.module.css"

export default function Categories() {
  return (
    <div className={styles.wrapper}>
      <h2>Categorie</h2>
      <div className={styles.gridWrapper}>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
        <div className={styles.category}></div>
      </div>
    </div>
  )
}
