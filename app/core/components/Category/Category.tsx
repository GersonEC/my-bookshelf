import styles from "./Category.module.css"
import { AiFillDelete } from "react-icons/ai"
import { Category as CategoryModel } from "db"
import { useMutation } from "@blitzjs/core"
import deleteCategory from "./mutations/deleteCategory"
import { openNotification } from "app/core/utilities/utils"
import { NotificationType } from "app/core/utilities/utils"
import { Button, notification, Divider, Space } from "antd"
import { RadiusUprightOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

interface CategoryProps {
  category: CategoryModel
}

export default function Category({ category }: CategoryProps) {
  const [deleteMutation] = useMutation(deleteCategory)

  const onCategoryDelete = async (id: number) => {
    try {
      //const category = await deleteMutation(id)
      console.log(`Categoria eliminata ${category}`)
      const message = "Messaggio"
      const description = "asfkasf kjdf skldfj slkdf j"
      openNotification(NotificationType.SUCCESS, message, "topRight", description)
    } catch (error) {
      const message = error.message
      const description = "asd asd"
      openNotification(NotificationType.ERROR, message, "topRight", description)
    }
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
