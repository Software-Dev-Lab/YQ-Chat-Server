/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import type { Context } from 'koa'
import UserModel from './user.model'
import type { RegisterRequestBody, LoginRequestBody } from './interface/index'

class UserController {
  /**
   * 用户注册
   */
  async register(ctx: Context) {
    const { username, password }: RegisterRequestBody = ctx.request.body as RegisterRequestBody
    const user = await UserModel.create({ username, password })
    ctx.body = {
      code: 0,
      message: '注册成功',
      data: user,
    }
  }
  /**
   * 用户登录
   */
  async login(ctx: Context) {
    const { username, password } = ctx.request.body as LoginRequestBody
    const user = await UserModel.findOne({
        where: { username, password }
    })
    if (user) {
      console.log(user)
      ctx.body = {
        code: 0,
        message: '登录成功', 
        data: user,
      }
    }
  }
}

export default new UserController()
