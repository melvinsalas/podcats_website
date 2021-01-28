import Link from 'next/link'

export default function MainPost({ post }) {
    if (post === 'undefined') return null

    return (
        <div>
            {!post && <div>No post!</div>}
            {post &&
                <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a><h1>{post.frontmatter.title}</h1></a>
                </Link>
            }
        </div>
    )
}