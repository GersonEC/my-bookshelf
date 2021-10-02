import styles from "./Category.module.css"
import { AiFillDelete } from "react-icons/ai"
import { Category as CategoryModel } from "db"
import { useMutation } from "@blitzjs/core"
import deleteCategory from "./mutations/deleteCategory"

interface CategoryProps {
  category: CategoryModel
}

export default function Category({ category }: CategoryProps) {
  const [deleteMutation] = useMutation(deleteCategory)

  const onCategoryDelete = async (id: number) => {
    const category = await deleteMutation(id)
    console.log(`Categoria eliminata ${category}`)
  }

  return (
    <div>
      <div className={styles.category_action}>
        <AiFillDelete title="Eliminare Categoria" onClick={() => onCategoryDelete(category.id)} />
      </div>
      <div className={styles.category_body}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  )
}
