import Link from "next/link"
import moment from "moment"

export default function MainPost({ post }) {
  moment.locale("es")
  if (post === "undefined") return null

  return (
    <div>
      <hr />
      {!post && <div>No post!</div>}
      {post && (
        <div>
          <Link href={{ pathname: `/post/${post.slug}` }}>
            <a>
              <h1>{post.frontmatter.title}</h1>
            </a>
          </Link>
          <p>
            {moment(
              post.frontmatter.date,
              "YYYY-MM-DDTHH:mm:ss.sssZ"
            ).fromNow()}{" "}
            / {post.frontmatter.author}
          </p>
          <p>{post.frontmatter.summary}</p>
          <audio src={post.frontmatter.url} controls />
        </div>
      )}
      <hr />
    </div>
  )
}
