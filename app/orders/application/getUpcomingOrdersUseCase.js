import axios from "axios";
import GetUpcomingOrdersMapper from '../domain/mapper/getUpcommingOrdersMapper'


export default class GetUpcomingOrdersUseCase {
  async get() {
    const response = await axios.get('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming')

    return GetUpcomingOrdersMapper.transform(response.data.result)
  }
}