/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
 */
import type { Context } from 'koa'
import UserModel from './user.model'
import type { RegisterRequestBody } from './interface/index'

class UserController {
    // 用户注册
    async register(ctx: Context) {
        const { email, password }: RegisterRequestBody = ctx.request.body as RegisterRequestBody
        const user = await UserModel.create({ email, password })
        ctx.body = {
            code: 0,
            message: '注册成功',
            data: user
        }
    }
}

export default new UserController()