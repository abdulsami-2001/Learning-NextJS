import React, { useState, useEffect } from 'react'
import STYLES from './BlogStyles.module.css'
import Link from 'next/link'

const Blog = ({allBlogs}) => {

  const [Blogs, setBlogs] = useState(allBlogs)
/*
  useEffect(() => {
    const options = { method: 'GET' };

    fetch('http://localhost:3000/api/blogs', options)
      .then(response => response.json())
      .then(response => {

        setBlogs(response)
      }
      )
      .catch(err =>
        console.error(err)
      );
  }, [])
*/
  return (
    <>
      {
        Blogs.map((blogItem) => {
          return (<div key={Math.random()} className={STYLES.mainCont} >
            <Link href={`blog/${blogItem.slug}`} >
              <h2>{blogItem.title}</h2>
            </Link>
              <p>{blogItem.content.substr(0,100)}...</p>
          </div>)
        })
      }
    </>
  )
}

export async function  getServerSideProps(context){

  let data = await fetch('http://localhost:3000/api/blogs')
  let response = await data.json()
  
  return{
    props:{allBlogs:response}
  }
}

export default Blog