// 同一管理用户相关的接口
import request from '@/utils/request'
import { AdminLoginByPwParams, LoginByPwRes } from './type'

// 统一管理API
enum API {
  ADMIN_LOGIN_URL = '/as/accounts/admin/login',
}

/**
 * 管理端登录并获取token
 *
 * @param {object} params 登录表单实体
 * @param {number} params.type 登录方式：1-密码登录; 2-验证码登录
 * @param {string} params.username 用户名
 * @param {string} params.cellPhone 手机号
 * @param {string} params.password 密码
 * @param {boolean} params.rememberMe 7天免密登录
 * @returns
 */
export const reqAdminLoginByPw = (params: AdminLoginByPwParams) =>
  request.post<any, LoginByPwRes>(API.ADMIN_LOGIN_URL, params)
