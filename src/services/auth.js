const REFRESH_TOKEN_KEY = `rthRefreshToken`

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY)

export const setRefreshToken = refreshToken =>
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)

export const deleteRefreshToken = () =>
  localStorage.removeItem(REFRESH_TOKEN_KEY)
