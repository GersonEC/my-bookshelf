import Category from "./Category"
import styles from "./Categories.module.css"
import { useMutation, useQuery } from "@blitzjs/core"
import getCategories from "./queries/getCategories"
import Button from "../Button/Button"
import createCategory from "./mutations/createCategory"
import { NotificationType, openNotification } from "app/core/utilities/utils"
import { Modal } from "antd"
import { useState } from "react"

export default function Categories() {
  const [categories] = useQuery(getCategories, {})
  const [createCategoryMutation] = useMutation(createCategory)
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [categoryName, setCategoryName] = useState("")

  const showModal = () => {
    setVisible(true)
  }

  const onCategoryAddClick = async (name: string) => {
    setConfirmLoading(true)
    try {
      const category = await createCategoryMutation(name)
      const message = "Categoria aggiunta!"
      const description = `La categoria ${category.name} è stata aggiunta con successo.`
      openNotification(NotificationType.SUCCESS, message, "topRight", description)
      setConfirmLoading(false)
      setVisible(false)
    } catch (error) {
      const message = "Ops! Errore in eliminazione"
      const description = error.message
      openNotification(NotificationType.ERROR, message, "topRight", description)
      setConfirmLoading(false)
      setVisible(false)
    }
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
    setCategoryName("")
  }

  const onCategoryNameChange = (e: any) => {
    setCategoryName(e.target.value)
  }

  const openModal = (): JSX.Element => {
    return (
      <Modal
        title="Nome Categoria"
        visible={visible}
        onOk={() => onCategoryAddClick(categoryName)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <input name="categoryName" value={categoryName} onChange={onCategoryNameChange} />
      </Modal>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.category_header}>
        <h2>Categorie</h2>
        <Button label={"Aggiungi"} onClick={showModal} />
      </div>
      {openModal()}
      <div className={styles.gridWrapper}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
