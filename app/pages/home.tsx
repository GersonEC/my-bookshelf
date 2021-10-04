import { Suspense } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Header from "app/core/components/Header/Header"
import Categories from "app/core/components/Category/Categories"

const Home: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Header />
        <Categories />
      </Suspense>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
