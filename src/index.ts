import express from 'express';
import diaryRouter from './routes/diaries'
const app = express()

app.use(express.json()) //middleware que transforma la req.body a un json 

const port = 5000

app.get('/', (_req, res) => res.send('Hello World AS!'))

//En la ruta usar diaryRouter
app.use('/api/diaries',diaryRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))