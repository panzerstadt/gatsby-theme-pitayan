import React from "react"
import { graphql, Link } from "gatsby"

import DefaultLayout from "@/layouts/Default"
import HomeHero from "@/components/HomeHero"
import HomeActions from "@/components/HomeActions"
import PostPanel from "@/components/PostPanel"

type HomePageProps = {
  data: any
}

type PostsProps = {
  posts: any
}

// TODO: move this component to another dir
const Posts: React.FC<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <div className="grid relative grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map(({ node }: any) => {
        return <PostPanel post={node} key={node.id} />
      })}
    </div>
  )
}

const HomePage: React.FC<HomePageProps> = ({ data }: HomePageProps) => {
  const posts = data.allMdx.edges

  return (
    <DefaultLayout>
      <HomeHero />
      <HomeActions />
      <hr className="mt-4 mb-12 border-gray-300" />
      <Posts posts={posts} />
      <div className="text-center my-24">
        <Link className="font-bold text-xl" to="posts">
          Load More -&gt;
        </Link>
      </div>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMdx(limit: 12) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            categories
            date(formatString: "MMMM Do, YYYY")
            hero {
              normal: childImageSharp {
                gatsbyImageData(
                  width: 768
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            excerpt
          }
        }
      }
    }
  }
`

export default HomePage
