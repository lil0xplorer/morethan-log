import { CONFIG } from "../site.config"
import { NextPageWithLayout, TPosts, TTags } from "../src/types"
import CustomError from "../src/routes/Error"
import MetaConfig from "../src/components/MetaConfig"
import { ReactNode } from "react"

type Props = {
  tags: TTags
  posts: TPosts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          description: CONFIG.blog.description,
          type: "website",
          url: CONFIG.link,
        }}
      />
      {page}
    </>
  )
}

export default NotFoundPage
