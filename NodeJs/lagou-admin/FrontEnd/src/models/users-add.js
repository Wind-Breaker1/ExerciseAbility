import http from '../utils/http'

export const userAdd = async (data) => {
  try {
    let { result } = await http({
      url: '/api/users',
      type: 'post',
      data
    })
    return result
  } catch (err) {
    console.log(err)
  }
}

// export const userAdd = (data) => {
//   return $.ajax({
//     url: '/api/users',
//     type: 'post',
//     data,
//     headers: {
//       'X-Access-Token': localStorage.getItem('lg-token') || ''
//     },
//     success(res) {
//       return res;
//     }
//   })
// }