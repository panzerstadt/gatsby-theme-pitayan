import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import DefaultLayout from "@pitayan/gatsby-theme-pitayan/src/layouts/Default"
import PostMeta from "@pitayan/gatsby-theme-pitayan/src/components/PostMeta"
import SubscriptionPanel from "@pitayan/gatsby-theme-pitayan/src/components/SubscriptionPanel"
import RelatedPosts from "@pitayan/gatsby-theme-pitayan/src/components/RelatedPosts"
import SocialSharing from "@pitayan/gatsby-theme-pitayan/src/components/SocialSharing"
import CategoryTags from "@pitayan/gatsby-theme-pitayan/src/components/CategoryTags"
import BackToTop from "@pitayan/gatsby-theme-pitayan/src/components/BackToTop"
import PostAuthors from "@pitayan/gatsby-theme-pitayan/src/components/PostAuthors"
import { useScrollToFragment } from "@pitayan/gatsby-theme-pitayan/src/hooks"
import SelectionPopup from "@pitayan/gatsby-theme-pitayan/src/components/SelectionPopup"
import ScrollVisibility from "@pitayan/gatsby-theme-pitayan/src/components/ScrollVisibility"

const PostImage: React.FC<{ image: any }> = ({ image }: any) => {
  return image ? (
    <GatsbyImage className="gatsby-resp-image-image" image={image} alt="" />
  ) : null
}

const Post: React.FC<Record<string, Array<unknown>>> = ({ data }: any) => {
  const {
    mdx: {
      body,
      frontmatter: {
        author: coAuthors,
        title,
        date,
        categories,
        hero,
        excerpt,
      },
      timeToRead,
      relatedPosts,
    },
  } = data
  const [postTarget, setPostTarget] = useState<HTMLElement | null>()
  const postImage = getImage(hero?.medium)

  useScrollToFragment()

  return (
    <DefaultLayout>
      <SelectionPopup target={postTarget} />

      <div className="hidden md:block">
        <ScrollVisibility className="fixed right-[6%] bottom-[6%] flex flex-col justify-center z-50">
          <BackToTop />
        </ScrollVisibility>
      </div>

      <div className="max-w-2xl mx-auto mb-24">
        <h1>{title}</h1>

        <div className="flex items-center space-x-4">
          <PostAuthors data={coAuthors} />
          <PostMeta date={date} timeToRead={timeToRead} />
        </div>

        <div className="text-2xl mt-8">
          <SocialSharing
            url={window.location.href}
            title={title}
            hashtags={categories}
            excerpt={excerpt}
            className="space-x-8"
            twitter
            facebook
            linkedin
            pocket
          />
        </div>
      </div>

      <div className="text-center mb-24">
        <PostImage image={postImage} />
      </div>

      <article className="markdown" ref={ref => setPostTarget(ref)}>
        <MDXProvider components={{}}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>

      <SubscriptionPanel className="my-12" />

      <hr className="border-gray-300 my-12" />

      <h3 className="text-base font-black font-serif mb-8">Social Sharing</h3>
      <div className="text-2xl my-8">
        <SocialSharing
          url={window.location.href}
          title={title}
          hashtags={categories}
          excerpt={excerpt}
          className="space-x-8"
          twitter
          facebook
          linkedin
          pocket
        />
      </div>

      <h3 className="text-base font-black font-serif mb-8">Categories</h3>
      <div className="my-8">
        <CategoryTags categories={categories} />
      </div>

      <h3 className="text-base font-black font-serif mb-8">Related Posts</h3>
      <RelatedPosts posts={relatedPosts} />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        author {
          id
          name
          initial
          avatar {
            normal: childImageSharp {
              gatsbyImageData(
                width: 32
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        title
        date(formatString: "MMMM Do, YYYY")
        categories
        hero {
          medium: childImageSharp {
            gatsbyImageData(
              width: 944
              height: 531
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      relatedPosts {
        id
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          categories
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
`

export default Post