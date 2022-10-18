import http from '../utils/http'

export const removeModel = async ({id, url}) => {
  try {
    let { result } = await http({
      url,
      type: 'delete',
      data: {
        id
      },
    })
    return result
  } catch (err) {
    console.log(err)
  }
}

// export const deleteUser = (id) => {
//   return $.ajax({
//     url: '/api/users',
//     type: 'delete',
//     data: {
//       id: id
//     },
//     headers: {
//       'X-Access-Token': localStorage.getItem('lg-token') || ''
//     },
//     success(res) {
//       return res;
//     }
//   })
// }