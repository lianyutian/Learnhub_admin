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
export interface UserDetail {
  /*用户id */
  id: number

  /*手机 */
  cellPhone: string

  /*用户名称/昵称 */
  name: string

  /*用户类型，1-其他员工,2-普通学员，3-老师 */
  type: number

  /*角色id，老师和学生不用填 */
  roleId: number

  /*头像 */
  icon: string

  /*岗位 */
  job: string

  /*个人介绍 */
  intro: string

  /*形象照地址 */
  photo: string

  /*用户名 */
  username: string

  /*邮箱 */
  email: string

  /*QQ号码 */
  qq: string

  /*省 */
  province: string

  /*市 */
  city: string

  /*区 */
  district: string

  /*性别：0-男性，1-女性 */
  gender: number
}

export interface QueryUserDetailByNameRes extends BaseRes {
  data: UserDetail
}
