import http from '../utils/http'

export const positionUpdate = async (data) => {
  try {
    let { result } = await http({
      url: '/api/positions/update',
      type: 'patch',
      data
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
