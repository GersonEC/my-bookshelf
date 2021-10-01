import styles from "./Category.module.css"

interface CategoryProps {
  name: string
}

export default function Category({ name }: CategoryProps) {
  return (
    <div className={styles.category}>
      <h3 className={styles.name}>{name}</h3>
    </div>
  )
}
