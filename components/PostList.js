import Link from "next/link"
import moment from "moment"

export default function PostList({ posts }) {
  if (posts === "undefined") return null
  moment.locale("es")

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <div>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a>{post.frontmatter.title}</a>
                  </Link>
                  <div>
                    {moment(
                      post.frontmatter.date,
                      "YYYY-MM-DDTHH:mm:ss.sssZ"
                    ).fromNow()}{" "}
                    / {post.frontmatter.author}
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
