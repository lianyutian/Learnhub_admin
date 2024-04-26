import { BaseRes } from '../type'

// 参数接口
export interface AdminLoginByPwParams {
  /*登录方式：1-密码登录; 2-验证码登录 */
  type: number

  /*用户名 */
  username?: string

  /*手机号 */
  cellPhone?: string

  /*密码 */
  password: string

  /*7天免密登录 */
  rememberMe?: boolean
}

export interface LoginByPwRes extends BaseRes {
  data: string
}

// 响应接口
export interface MeRes {
  /*用户id */
  id: number

  /*名字 */
  name: string

  /*头像 */
  icon: string

  /*手机号 */
  cellPhone: string

  /*用户名 */
  username: string

  /*邮箱 */
  email: string

  /*QQ号码 */
  qq: string

  /*个人介绍 */
  intro: string

  /*省 */
  province: string

  /*市 */
  city: string

  /*区 */
  district: string

  /*性别：0-男性，1-女性 */
  gender: number

  /*注册时间 */
  createTime: Record<string, unknown>

  /*角色名称 */
  roleName: string
}

export interface QueryMeRes extends BaseRes {
  data: MeRes
}
