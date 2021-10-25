import { writable } from 'svelte/store'
import Cookie from 'js-cookie'
import UserModel from '../model/users/UserModel'

export const isLogin = writable(getIsLogin())
export const cartProductLength = writable(0)


export function setLogin(userDetails: UserModel): void {
  isLogin.update(item => item = true)
  Cookie.set('isLogin', 'true')
  window.localStorage.setItem('user', JSON.stringify(userDetails))
}

export function setLogout(): void {
  isLogin.set(false)
  Cookie.remove('isLogin')
  window.localStorage.removeItem('user')
}

export function getIsLogin(): boolean {
  return Cookie.get('isLogin') === 'true'
}


export function getUserDetails(): UserModel {
  return JSON.parse(window.localStorage.getItem('user'))
}

export function setCartProductLength(count: number): void {
  cartProductLength.set(count)
}

export function getCartProductLength(): number {
  let result: number = 0
  cartProductLength.subscribe(item => {
    result = item
  })
  return result
}
