export function authLogin (state, payload) {
  state.authStatus = payload
  payload ? localStorage.setItem('token', JSON.stringify(payload)) : localStorage.removeItem('token')
}
