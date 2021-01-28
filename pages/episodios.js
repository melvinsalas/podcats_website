import matter from "gray-matter"

import Layout from "@components/Layout"
import PostList from "@components/PostList"
import MainPost from "@components/MainPost"

const Index = ({ posts, title, description, ...props }) => {
  const sorted = posts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    )

  return (
    <Layout pageTitle={title}>
      <main>
        <h1>Lista de Episodios</h1>
        <PostList posts={sorted} />
      </main>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
