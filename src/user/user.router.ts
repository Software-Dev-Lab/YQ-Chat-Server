/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import Router from '@koa/router'
import UserController from './user.controller'

const router = new Router()

/**
 * @description 用户注册
 */
router.post('/register', UserController.register)

/**
 * @description 用户登录
 * */
router.post('/login', UserController.login)

/**
 * @description 获取用户信息
 */
router.get('/user', UserController.getUserInfo)

/**
 * @description 删除用户
 */
router.delete('/user', UserController.delete)

/**
 * @description 修改用户信息
 * */
router.put('/user', UserController.updateUserInfo)

export default router
