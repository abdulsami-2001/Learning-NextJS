import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as fs from 'fs'

const Slug = ({ blogItem }) => {
  // const router = useRouter()

  const [SingleBlog, setSingleBlog] = useState(blogItem)

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
        <p>{SingleBlog && SingleBlog.content}</p>
        <p>Author:{SingleBlog && SingleBlog.author}</p>
      </>

    )
  }
}



export async function getStaticPaths(context){



    return{
      paths:[
        {params:{slug:'how-to-learn-anaconda'}},
        {params:{slug:'how-to-learn-java'}},
        {params:{slug:'how-to-learn-js'}},
        {params:{slug:'how-to-learn-mongodb'}},
        {params:{slug:'how-to-learn-python'}},
        {params:{slug:'how-to-learn-wp'}},
      ],
      fallback:true // false or 'blocking'
    }

}



export async function getStaticProps(context){

  const {slug} =  context.params
  
  let data = await fs.promises.readFile(`BlogPostData/${slug}.json`,'utf-8')
  return{
    props:{blogItem:JSON.parse(data)}
  }
}


/*
export async function getServerSideProps(context) {

  let data = await fetch(`http://localhost:3000/api/getBlogs?slug=${context.query.slug}`)
  let response = await data.json()

  return {
    props: { blogItem: response }
  }
}
*/

export default Slug