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
