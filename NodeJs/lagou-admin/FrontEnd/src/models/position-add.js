import http from '../utils/http'

export const positionAdd = async (data) => {
  try {
    let { result } = await http({
      url: '/api/positions/add',
      type: 'post',
      data
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
