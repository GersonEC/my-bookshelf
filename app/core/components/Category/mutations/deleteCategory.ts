import { resolver } from "@blitzjs/core/server"
import db from "db"

export default resolver.pipe(resolver.authorize(), async ({ id }) => {
  const category = await db.category.deleteMany({ where: { id } })
  return category
})
