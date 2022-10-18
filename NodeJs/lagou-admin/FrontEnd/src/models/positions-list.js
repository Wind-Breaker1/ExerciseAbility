import http from '../utils/http'

export const positionsList = async () => {
  try {
    let { result } = await http({
      url: '/api/positions/list',
    })
    return result.data;
  } catch (err) {
    console.log(err)
  }
}