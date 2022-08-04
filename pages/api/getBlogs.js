import * as fs from 'fs'

export default  function  handler(req, res) {
  
  fs.readFile(`BlogPostData/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({err:'Internal Server Erro'})
    }
    res.status(200).json(JSON.parse(data))
  })
}
