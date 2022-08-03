import * as fs from 'fs'

export default async function handler(req, res) {
  
  let data = await fs.promises.readdir('BlogPostData/')

  let file;
  let allBlogs = []

  
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    file =  await fs.promises.readFile(`BlogPostData/${item}`, 'utf-8')
    allBlogs.push( JSON.parse(file))
    
  }

  res.status(200).json(allBlogs)

  
  
  /*
    data.map(async (item)=>{
      file =  await fs.promises.readFile(`BlogPostData/${item}`, 'utf-8')
      allBlogs.push( JSON.parse(file))
      
    })
  */
  
  /*
  
  fs.readdir(`BlogPostData`, (err, data) => {
    if (err) {
      res.status(500).json({err:'Internal Server Erro'})
    }
    res.status(200).json(data)
  })
  */
  
}
