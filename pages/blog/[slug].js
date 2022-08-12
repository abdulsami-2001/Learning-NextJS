import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const slug = ({ blogItem }) => {
  // const router = useRouter()

  const [SingleBlog, setSingleBlog] = useState(blogItem)
  function createMarkup(c) {
    return { __html: c }
  }


  /*
    useEffect(() => {
      const { slug } = router.query;
      const options = { method: 'GET' };
      
      fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`, options)
        .then(response => response.json())
        .then(response => {
         
          setSingleBlog(response)
        })
        .catch(err => {
          console.log(IsError)
        });
  
    }, [router.isReady])
  */
  if (SingleBlog.err) {
    return (
      <>
        <p>error</p>
        <hr />
        <p>{SingleBlog.err}</p>
      </>

    )
  } else {
    return (

      <>
        <h2>Title: {SingleBlog && SingleBlog.title}</h2>
        {SingleBlog && <div dangerouslySetInnerHTML={createMarkup(SingleBlog.content)} ></div>}
        <p>Author:{SingleBlog && SingleBlog.author}</p>
      </>

    )
  }
}

export async function getServerSideProps(context) {

  let data = await fetch(`http://localhost:3000/api/getBlogs?slug=${context.query.slug}`)
  let response = await data.json()

  return {
    props: { blogItem: response }
  }
}


export default slug