import { resolver } from "@blitzjs/core/server"
import db from "db"

export default resolver.pipe(resolver.authorize(), async () => {
  const categories = await db.category.findMany()
  return categories
})
