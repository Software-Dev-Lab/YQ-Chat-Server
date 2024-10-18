/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: app.ts
 */
import Koa from 'koa'
import json from 'koa-json'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import router from '../user/user.router'
import { addAliases } from 'module-alias'

addAliases({ '@': __dirname })

const app = new Koa()
app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server started at port 3000 🎉')
})
