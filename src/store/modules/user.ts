// src/store/modules/user.ts

// 创建用户相关的仓库
import { defineStore } from 'pinia'
import { AdminLoginByPwParams, LoginByPwRes, QueryUserDetailByNameRes, UserDetail } from '@/api/user/type'
import { queryAdminLoginByPw, queryUserDetailByName } from '@/api/user'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { UserState } from './type/type'
import { constantRoute } from '@/router/router'

// 创建用户小仓库
const useUserStore = defineStore('UserStore', {
  // 用户仓库存储数据地方
  state(): UserState {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '', // 用户头像
    }
  },
  // 处理异步|逻辑地方
  actions: {
    // 用户登录
    async userLoginAction(params: AdminLoginByPwParams) {
      const result: LoginByPwRes = await queryAdminLoginByPw(params)

      if (result.code === 200) {
        this.token = result.data as string
        //localStorage.setItem('TOKEN', this.token)
        SET_TOKEN(this.token)
        return 'OK'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },
    // 获取用户信息
    async userInfoAction(username: string) {
      const result: QueryUserDetailByNameRes = await queryUserDetailByName(username)
      if (result.code === 200) {
        this.username = result.data.username
        //this.avatar = result.data.avatar
      }
    },
    // 退出登录
    userLogoutAction() {
      //当前没有mock接口（不做）：服务器数据token失效
      //本地数据清空
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})
// 对外暴露小仓库
export default useUserStore
