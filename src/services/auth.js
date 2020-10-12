const AUTH_DATA_KEY = `rthAuthData`

export const getPersistedAuthData = () =>
  JSON.parse(localStorage.getItem(AUTH_DATA_KEY))

export const setPersistedAuthData = authData =>
  localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(authData))

export const deletePersistedAuthData = () =>
  localStorage.removeItem(AUTH_DATA_KEY)
