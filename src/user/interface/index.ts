export interface RegisterRequestBody {
  username: string
  password: string
}

export interface LoginRequestBody {
  username: string
  password: string
}
export interface IUserModel {
  userId: number // 用户 ID
  username: string // 用户账号
  password: string // 用户密码
  nickname?: string // 用户昵称（可选）
  avatar?: string // 用户头像（可选）
  gender?: 'male' | 'female' | 'other' // 用户性别（可选，枚举类型）
  birthday?: Date // 用户生日（可选）
  country?: string // 用户国家（可选）
  province?: string // 用户省份（可选）
  signature?: string // 用户个性签名（可选）
  region?: string // 用户地区（可选）
}
