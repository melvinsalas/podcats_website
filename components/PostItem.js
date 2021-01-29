import Link from "next/link"
import moment from "moment"

export default function PostItem({ post }) {
  moment.locale("es")

  return (
    <div>
      <Link href={{ pathname: `/post/${post.slug}` }}>
        <a>{post.frontmatter.title}</a>
      </Link>
      <div>
        {moment(post.frontmatter.date, "YYYY-MM-DDTHH:mm:ss.sssZ").fromNow()} /{" "}
        {post.frontmatter.author}
      </div>
    </div>
  )
}
