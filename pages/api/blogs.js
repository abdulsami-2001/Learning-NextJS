import * as fs from 'fs'

export default function handler(req, res) {
  fs.readdir(`BlogPostData`, (err, data) => {
    if (err) {
      res.status(500).json({err:'Internal Server Erro'})
    }
    res.status(200).json(data)
  })
}
