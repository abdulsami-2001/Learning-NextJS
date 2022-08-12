import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('ContactData', 'utf-8')
        fs.promises.writeFile(`ContactData/${data.length + 1}.json`, req.body)
        res.status(200).json(req.body)
    } else {
        res.status(200).json(['AllBlogs'])
    }
}