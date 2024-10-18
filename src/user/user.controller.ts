/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import type { Context } from 'koa'
import UserModel from './user.model'
import type { RegisterRequestBody, LoginRequestBody, IUserModel } from './interface/index'

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
    }
  }
  /**
   * 用户登录
   */
  async login(ctx: Context) {
    const { username, password } = ctx.request.body as LoginRequestBody
    const user = await UserModel.findOne({
      where: { username, password },
    })
    if (user) {
      ctx.body = {
        code: 0,
        message: '登录成功',
        data: user,
      }
    }
  }
  /**
   * 删除用户
   */
  async delete(ctx: Context) {
    const { id } = ctx.params
    const user = await UserModel.findOne({
      where: { id },
    })
    if (user) {
      await user.destroy()
      ctx.body = {
        code: 0,
        message: '删除成功',
      }
    } else {
      ctx.body = {
        code: 1,
        message: '用户不存在',
      }
    }
  }
  /**
   * 查询用户信息
   * */
  async getUserInfo(ctx: Context) {
    const { id } = ctx.params
    const user = await UserModel.findOne({
      where: { id },
    })
    if (user) {
      ctx.body = {
        code: 0,
        message: '获取成功',
        data: user,
      }
    } else {
      ctx.body = {
        code: 1,
        message: '用户不存在',
      }
    }
  }
  /**
   * 修改用户信息
   */
  async updateUserInfo(ctx: Context) {
    const { id } = ctx.params

    const { username, nickname, gender, birthday, country, province, signature, region } = ctx.request.body as IUserModel

    const user = await UserModel.findOne({
      where: { id },
    })

    if (user) {
      const updateData: Partial<IUserModel> = {}
      if (username) updateData.username = username
      if (nickname) updateData.nickname = nickname
      if (gender) updateData.gender = gender
      if (birthday) updateData.birthday = birthday
      if (country) updateData.country = country
      if (province) updateData.province = province
      if (signature) updateData.signature = signature
      if (region) updateData.region = region

      await user.update(updateData)

      ctx.body = {
        code: 0,
        message: '修改成功',
      }
    } else {
      ctx.body = {
        code: 1,
        message: '用户不存在',
      }
    }
  }
}

export default new UserController()
