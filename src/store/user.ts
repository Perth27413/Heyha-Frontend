import { writable } from 'svelte/store'
import { get, post } from './api'
import UserModel from '../model/users/UserModel'
import UserLoginRequestModel from '../model/users/UserLoginRequestModel'

export const isLogin = writable(false)

export async function postLogin(data: UserLoginRequestModel): Promise<UserModel> {
  const response: UserModel = await (post('/user/login', data))
  return response
}