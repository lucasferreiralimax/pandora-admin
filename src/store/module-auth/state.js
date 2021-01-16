export default function () {
  return {
    authStatus: JSON.parse(localStorage.getItem('token'))
  }
}
