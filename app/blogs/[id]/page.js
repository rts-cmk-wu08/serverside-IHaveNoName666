
async function getBlog(id) {
    return (await fetch(`http://localhost:4000/posts/${id}`, { next: { revalidate: 0 } })).json()
}

export default async function StaticPage({ params }) {
    const blog = await getBlog(params.id)


    console.log(blog)
    return(
        <div>
                <h1>{blog.title}</h1>
                <img src="https://placehold.co/1200x600" alt=""/>
                <p>{blog.text}</p>
        </div>
    )
}
