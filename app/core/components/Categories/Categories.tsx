import Category from "../Category/Category"
import styles from "./Categories.module.css"

const categoriesData = ["Sviluppo Personale", "Informatica", "Business", "Marketing", "Biografie"]

export default function Categories() {
  return (
    <div className={styles.wrapper}>
      <h2>Categorie</h2>
      <div className={styles.gridWrapper}>
        {categoriesData.map((category, index) => (
          <Category key={index} name={category} />
        ))}
      </div>
    </div>
  )
}
