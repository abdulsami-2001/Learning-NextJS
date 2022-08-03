import React, { useState, useEffect } from 'react'
import STYLES from './BlogStyles.module.css'
import Link from 'next/link'

const Blog = () => {

  const [Blogs, setBlogs] = useState([])

  useEffect(() => {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/api/blogs', options)
      .then(response => response.json())
      .then(response => {

        console.log(response)
        setBlogs(response)
      }
      )
      .catch(err =>
        console.error(err)
      );
  }, [])

  return (
    <>
      {
        Blogs.map((blogItem) => {
          return (<div key={Math.random()} className={STYLES.mainCont} >
            <Link href={`blog/${blogItem.slug}`} >
              <h2>{blogItem.title}</h2>
            </Link>
              <p>{blogItem.content}</p>
          </div>)
        })
      }
    </>
  )
}

export default Blog