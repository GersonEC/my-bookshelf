import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "todoBlitzApp"}</title>
        <link rel="icon" href="/my-bookshelf-icon.png" />
      </Head>

      {children}
    </>
  )
}

export default Layout
