import express, { Express, Request, Response } from 'express'

import dotenv from 'dotenv'

// configuracion .env
dotenv.config()

//create express app
const app: Express = express()
const port: string | number = process.env.PORT || 8000


app.get('/', (req: Request, res: Response) => {
    res.send({ data: 'Goodbye, world' })
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})