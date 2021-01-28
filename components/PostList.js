import Link from 'next/link'
import moment from 'moment'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null
  moment.locale("es")

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post.frontmatter.title} <i>{moment(post.frontmatter.date, "YYYY-MM-DD").fromNow()}</i></a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}