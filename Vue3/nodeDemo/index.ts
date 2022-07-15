import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
import cors from 'cors'

const app: Express = express()
const router: Router = express.Router()

app.use(cors())
app.use('/api', router);

router.get('/list', async (req: Request, res: Response) => {
  const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
  res.json({
    data: result.data
  })
})

app.listen(3333, () => {
  console.log('app start on localhost:3000');
})