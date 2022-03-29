import React, { memo } from "react"
import { Link } from "gatsby"
import DarkModeToggle from "@pitayan/gatsby-theme-pitayan/src/components/DarkModeToggle"
import URLCopyIconButton from "@pitayan/gatsby-theme-pitayan/src/components/URLCopyIconButton"
import SiteLogo from "@pitayan/gatsby-theme-pitayan/src/components/SiteLogo"
import { useSiteMetadata } from "@pitayan/gatsby-theme-pitayan/src/hooks"

const TopNav: React.FC = () => {
  const { name, title, icon } = useSiteMetadata()

  return (
    <nav className="block flex justify-between content-center">
      <Link to="/" className="flex space-x-4 items-center">
        <SiteLogo className="h-10 w-10" alt={title} icon={icon} />
        <b className="font-serif font-extrabold tracking-wide text-2xl hidden md:block">
          {name}
        </b>
      </Link>
      <div className="flex space-x-8 text-3xl items-center">
        <URLCopyIconButton />
        <DarkModeToggle />
      </div>
    </nav>
  )
}

export default memo(TopNav)
