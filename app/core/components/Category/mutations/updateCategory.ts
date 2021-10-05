import { resolver } from "blitz"
import db, { Category } from "db"

export default resolver.pipe(async (props: Category, ctx) => {
  const category = await db.category.update({
    where: { id: props.id },
    data: { name: props.name },
  })

  return category
})
