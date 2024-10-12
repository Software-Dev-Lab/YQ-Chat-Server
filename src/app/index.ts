/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: app.ts
 */
import Koa from 'koa'
import { addAliases } from 'module-alias'
import cors from '@koa/cors'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

addAliases({'@': __dirname})

app.use(cors())
app.use(json())
app.use(bodyParser())

app.listen(3000, () => {
  console.log('run success')
  console.log('app started at port 9000...')
})
