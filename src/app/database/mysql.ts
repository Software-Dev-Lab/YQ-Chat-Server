/*
 * @Author: ZRMYDYCG
 * @Date: 2024-09
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import { Sequelize } from 'sequelize'
import { dbConfig } from '../app.config'

const db = new Sequelize(dbConfig.database, dbConfig.userName, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  logging: false,
  define: {
    freezeTableName: true, // 禁止给新建的表自动添加复数
    timestamps: false, // 禁止 Sequelize 在模型中自动添加时间戳字段
  },
  sync: {
    force: false, // 不会强制删除现有表并且重新创建
  },
})

db.sync() // 如果不存在, 就创建表（如果存在，就不执行任何操作）

export default db
