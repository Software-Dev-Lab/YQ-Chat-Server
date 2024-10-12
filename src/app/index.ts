/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: app.ts
 */
// 创建 koa 实例
import Koa from 'koa'
const app = new Koa()

// 设置路径别名
import { addAliases } from 'module-alias'
addAliases({'@': __dirname})

// 中间件
app.use(async (ctx) => {
  console.log(ctx)
  ctx.body = 'Hello World'
})

// 监听端口
app.listen(1129, () => {
  console.log('run success')
  console.log('app started at port 9000...')
})
