import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(async (name: string, ctx) => {
  const category = await db.category.create({
    data: { name },
    select: { id: true, name: true },
  })

  return category
})
