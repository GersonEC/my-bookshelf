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

      <div style={{ padding: "0px 32px 64px 32px" }}>{children}</div>
    </>
  )
}

export default Layout
