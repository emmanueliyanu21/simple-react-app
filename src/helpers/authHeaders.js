export function authHeader() {
    // return authorization header with jwt token
    const token = JSON.parse(sessionStorage.getItem('token'))
    if (token) {
      return { Authorization: 'Bearer ' + token }
    } else {
      return {}
    }
  }
  