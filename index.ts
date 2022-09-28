import express, { Express, Request, Response } from 'express'

import dotenv from 'dotenv'

// configuracion .env
dotenv.config()

//create express app
const app: Express = express()
const port: string | number = process.env.PORT || 8000


app.get('/', (req: Request, res:Response) => {
    res.send({ hola: 'Como estasxd' })
})
app.get('/hello', (req: Request, res:Response) => {
    res.send('Hello word')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})