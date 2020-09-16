import decode from "jwt-decode"

const AUTH_DATA_KEY = `rthAuthData`

export const getPersistedAuthData = () =>
  JSON.parse(localStorage.getItem(AUTH_DATA_KEY))

export const setPersistedAuthData = authData =>
  localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(authData))

export const setPersistedRefreshToken = refreshToken =>
  setPersistedAuthData({ ...getPersistedAuthData(), refreshToken })

export const deletePersistedAuthData = () =>
  localStorage.removeItem(AUTH_DATA_KEY)

const getCurrentTimestampInSeconds = () => Math.floor(Date.now() / 1000)

export const isTokenExpired = token =>
  decode(token).exp <= getCurrentTimestampInSeconds()
