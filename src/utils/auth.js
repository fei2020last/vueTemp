import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const UserInfoKey = 'UserInfo'

/*用户信息*/
export function getUserInfoData() {
  return JSON.parse(Cookies.get(UserInfoKey))
}

export function setUserInfoData(userInfo) {
  return Cookies.set(UserInfoKey, JSON.stringify(userInfo))
}

export function removeUserInfoData() {
  return Cookies.remove(UserInfoKey)
}

// token
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(val) {
  return Cookies.set(TokenKey, val)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
