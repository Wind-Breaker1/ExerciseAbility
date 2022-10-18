import http from '../utils/http'

export const usersList = async () => {
  try {
    let { result } = await http({
      url: '/api/users',
    })
    return result
  } catch (err) {
    console.log(err)
  }
}

// export const usersList = () => {
//   return $.ajax({
//     url: '/api/users',
//     headers: {
//       'X-Access-Token': localStorage.getItem('lg-token') || ''
//     },
//     success(res) {
//       return res;
//     }
//   })
// }