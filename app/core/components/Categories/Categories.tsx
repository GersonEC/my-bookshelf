import Category from "../Category/Category"
import styles from "./Categories.module.css"
import { useQuery } from "@blitzjs/core"
import getCategories from "../Category/queries/getCategories"
//const categoriesData = ["Sviluppo Personale", "Informatica", "Business", "Marketing", "Biografie"]

export default function Categories() {
  const [categories] = useQuery(getCategories, {})

  return (
    <div className={styles.wrapper}>
      <h2>Categorie</h2>
      <div className={styles.gridWrapper}>
        {categories.map((category) => (
          <Category key={category.id} name={category.name} />
        ))}
      </div>
    </div>
  )
}
