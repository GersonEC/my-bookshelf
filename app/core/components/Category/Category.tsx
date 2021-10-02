import styles from "./Category.module.css"
import { AiFillDelete } from "react-icons/ai"

interface CategoryProps {
  name: string
}

export default function Category({ name }: CategoryProps) {
  const onCategoryDelete = () => {
    alert("Categoria eliminata")
  }

  return (
    <div>
      <div className={styles.category_action}>
        <AiFillDelete title="Eliminare Categoria" onClick={onCategoryDelete} />
      </div>
      <div className={styles.category_body}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  )
}
