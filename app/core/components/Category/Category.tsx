import styles from "./Category.module.css"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { Category as CategoryModel } from "db"
import { useMutation } from "@blitzjs/core"
import deleteCategory from "./mutations/deleteCategory"
import { openNotification } from "app/core/utilities/utils"
import { NotificationType } from "app/core/utilities/utils"
import updateCategory from "./mutations/updateCategory"
import "antd/dist/antd.css"
import { Modal } from "antd"
import { useState } from "react"

interface CategoryProps {
  category: CategoryModel
}

export default function Category({ category }: CategoryProps) {
  const [deleteMutation] = useMutation(deleteCategory)
  const [updateMutation] = useMutation(updateCategory)
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")

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

  const onCategoryUpdate = async (_category: CategoryModel) => {
    setConfirmLoading(true)
    try {
      _category.name = newCategoryName
      const category = await updateMutation(_category)
      const message = "Categoria modificata!"
      const description = `La categoria ${category.name} è stata modificata con successo.`
      openNotification(NotificationType.SUCCESS, message, "topRight", description)
      setConfirmLoading(false)
      setVisible(false)
      setNewCategoryName("")
    } catch (error) {
      const message = "Ops! Errore in modifica"
      const description = error.message
      openNotification(NotificationType.ERROR, message, "topRight", description)
      setConfirmLoading(false)
      setVisible(false)
    }
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
    setNewCategoryName("")
  }

  const onCategoryNameChange = (e: any) => {
    setNewCategoryName(e.target.value)
  }

  const openModal = (): JSX.Element => {
    return (
      <Modal
        title="Modifica Nome Categoria"
        visible={visible}
        onOk={() => onCategoryUpdate(category)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <input name="categoryName" value={newCategoryName} onChange={onCategoryNameChange} />
      </Modal>
    )
  }

  return (
    <div>
      <div className={styles.category_action}>
        <AiFillEdit className={styles.edit} title="Modificare Categoria" onClick={showModal} />
        <AiFillDelete
          className={styles.delete}
          title="Eliminare Categoria"
          onClick={() => onCategoryDelete(category)}
        />
      </div>
      {openModal()}
      <div className={styles.category_body}>
        <h3 className={styles.name}>{category.name}</h3>
      </div>
    </div>
  )
}
