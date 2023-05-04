import Link from "next/link"

async function getBlogs(){
  return (await fetch(`http://localhost:4000/posts`, { next: { revalidate: 0 } })).json()
}

export default async function StaticPropsPage() {
  const blogs = await getBlogs()
  
    return (
    <div>
			            {blogs?.map(blog =>
			            		<div key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>
                          <img src="https://placehold.co/200x200" alt=""/>
                        </Link>
			            <p>{blog.title}</p>
			            		</div>
			            )}
		</div>
    )
  }