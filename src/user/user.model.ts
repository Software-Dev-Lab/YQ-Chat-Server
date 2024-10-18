/*
 * @Author: ZRMYDYCG
 * @Date: 2024-09
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 用户 Model
 */
const db = require('@/config/db')
import { DataTypes } from 'sequelize'

// 用户表
const UserModel = db.define('user-info', {
    // 用户 ID
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    // 用户账号
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // 用户密码
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 用户昵称
    nickname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // 用户头像
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // 用户性别
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: true,
    },
    // 用户生日
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    // 用户国家
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // 用户省份
    province: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // 用户个性签名
    signature: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // 用户地区
    region: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default UserModel
