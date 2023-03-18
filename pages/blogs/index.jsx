import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home({ blogs }) {

  //const { data: session } = useSession()

  function deleteBlog(id) {
    fetch(`/api/blogs/articles/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Blogs</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/blogs/add">+New Blog</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '20rem'}}>Title</th>
            <th style={{width: '10rem'}}>Category</th>
            <th style={{width: '10rem'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map(blog => {
              return (
                <tr key={blog._id}>
                  <td>
                    <Link href={`/blogs/${blog._id}`}>
                      {blog.title}
                    </Link>
                  </td>
                  <td style={{textAlign:'center'}}>{blog.category}</td>
                  <td>
                    
                      <>
                        <Link href={`/blogs/update/${blog._id}`}>Update</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                      </>
                
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr/>
      <Link href="/">Home</Link>
      <p>
      </p>

    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/blogs/articles/`)
  const blogs = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { blogs } }
}


/* //For Authentication
export default function Home({ blogs }) {

  const { data: session } = useSession()

  function deleteBlog(id) {
    fetch(`/api/blogs/articles/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Blogs</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/blogs/add">+New Blog</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '20rem'}}>Title</th>
            <th style={{width: '10rem'}}>Category</th>
            <th style={{width: '10rem'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map(blog => {
              return (
                <tr key={blog._id}>
                  <td>
                    <Link href={`/blogs/${blog._id}`}>
                      {blog.title}
                    </Link>
                  </td>
                  <td style={{textAlign:'center'}}>{blog.category}</td>
                  <td>
                    {session && 
                      <>
                        <Link href={`/blogs/update/${blog._id}`}>Update</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                      </>
                }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr/>
      <Link href="/">Home</Link>
      <p>
      </p>

    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/blogs/articles/`)
  const blogs = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { blogs } }
}

*/


/* // Old Code
export default function Home({ blogs }) {

  function deleteBlog(id) {
    fetch(`/api/blogs/articles/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Blogs</h1>
      <p style={{margin: '0.4rem'}}>
        <Link href="/blogs/add">New Blog</Link>
      </p>
      <table><tbody>
        {
          blogs.map(blog => {
            return (
              <tr key={blog._id}>
                <td>
                  <Link href={`/blogs/${blog._id}`}>
                    {blog.title}
                  </Link>
                </td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                  <Link href={`/blogs/update/${blog._id}`}>Update</Link>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}

export async function getServerSideProps() {
  
  const res = await fetch(`http://localhost:3000/api/blogs/articles/`)
  const blogs = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { blogs } }
  
}
*/
