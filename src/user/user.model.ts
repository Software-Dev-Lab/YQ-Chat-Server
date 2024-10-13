/*
 * @Author: ZRMYDYCG
 * @Date: 2024-09
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 用户 Model
 */
const db = require('@/config/db')
const { DataTypes } = require('sequelize')
const dayjs = require('dayjs')

// 用户表
const UserModel = db.define('user-info', {
    // 昵称
    nickName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // 头像
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // 创建时间
    createTime: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: dayjs().format('YYYY-MM-DD HH:mm:ss'), // 默认当前时间
    },
})

export default UserModel