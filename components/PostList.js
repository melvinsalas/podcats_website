export default function PostList({ posts }) {
  if (posts === "undefined") return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <PostItem post={post} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
