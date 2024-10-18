/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
 */
import Router from '@koa/router'
import UserController from './user.controller'
import exp from 'constants'

const router = new Router()

/**
 * @description 用户注册
*/
router.post('/register', UserController.register)

/**
 * @description 用户登录
 * */
router.post('/login')

/**
 * @description 获取用户信息
*/
router.get('/user')

/**
 * @description 删除用户
*/
router.delete('/user')

/**
 * @description 修改用户信息
 * */
router.put('/user')


export default router