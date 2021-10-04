import styles from "./Category.module.css"
import { AiFillDelete } from "react-icons/ai"
import { Category as CategoryModel } from "db"
import { useMutation } from "@blitzjs/core"
import deleteCategory from "./mutations/deleteCategory"
import { openNotification } from "app/core/utilities/utils"
import { NotificationType } from "app/core/utilities/utils"
import "antd/dist/antd.css"

interface CategoryProps {
  category: CategoryModel
}

export default function Category({ category }: CategoryProps) {
  const [deleteMutation] = useMutation(deleteCategory)

  const onCategoryDelete = async (_category: CategoryModel) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Sei sicuro di voler eliminare la categoria: ${_category.name}?`)) {
        await deleteMutation(_category.id)
        console.log()
        const message = "Categoria eliminata!"
        const description = `La categoria ${_category.name} è stata eliminata con successo.`
        openNotification(NotificationType.SUCCESS, message, "topRight", description)
      }
    } catch (error) {
      const message = "Ops! Errore in eliminazione"
      const description = error.message
      openNotification(NotificationType.ERROR, message, "topRight", description)
    }
  }

  return (
    <div>
      <div className={styles.category_action}>
        <AiFillDelete title="Eliminare Categoria" onClick={() => onCategoryDelete(category)} />
      </div>
      <div className={styles.category_body}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  )
}
