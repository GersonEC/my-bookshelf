import styles from "./Category.module.css"
import { AiFillDelete } from "react-icons/ai"
import { Category as CategoryModel } from "db"
import { useMutation } from "@blitzjs/core"
import deleteCategory from "./mutations/deleteCategory"
import { Button, notification, Divider, Space } from "antd"
import { RadiusUprightOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

interface CategoryProps {
  category: CategoryModel
}

export default function Category({ category }: CategoryProps) {
  const [deleteMutation] = useMutation(deleteCategory)

  const onCategoryDelete = async (id: number) => {
    const category = await deleteMutation(id)
    console.log(`Categoria eliminata ${category}`)
  }

  const openNotification = (placement) => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    })
  }

  return (
    <div>
      <Button type="primary" onClick={() => openNotification("topRight")}>
        <RadiusUprightOutlined />
        topRight
      </Button>
      <div className={styles.category_action}>
        <AiFillDelete title="Eliminare Categoria" onClick={() => onCategoryDelete(category.id)} />
      </div>
      <div className={styles.category_body}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  )
}
