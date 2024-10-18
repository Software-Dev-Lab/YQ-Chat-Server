import type { Context, Next } from 'koa'

/**
 * @description 统一接口响应数据格式
 */
export const responseHandler = async (ctx: Context, next: Next) => {
  ctx.send = (data = null, code = 200, message = 'success') => {
    ctx.status = code
    ctx.body = {
      data,
      message,
    }
  }
}

/**
 * @description 捕获错误中间件
 */
export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (error: any) {
    if (error.code) {
      const { code, message } = error
      ctx.send(code, message)
    }
  }
}
