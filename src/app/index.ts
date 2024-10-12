/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: app.ts
 */
import Koa from 'koa'
import { addAliases } from 'module-alias'
import cors from 'koa2-cors'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import  { responseHandler, errorHandler } from './app.middleware'

const app = new Koa()

addAliases({'@': __dirname})

app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(responseHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server started at port 3000 🎉')
})
