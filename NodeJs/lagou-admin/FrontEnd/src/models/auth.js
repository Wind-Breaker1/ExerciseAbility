import http from '../utils/http'
export const auth = async () => {
  try {
    let { result } = await http({
      url: '/api/users/isAuth'
    })
    // console.log(result)
    return result;
  } catch (err) {
    console.log(err);
  }
  // return $.ajax({
  //   url: '/api/users/isAuth',
  //   headers: {
  //     'X-Access-Token': localStorage.getItem('lg-token') || ''
  //   },
  //   success(result) {
  //     // console.log(result)
  //     return result;
  //   }
  // })
}

export default auth;