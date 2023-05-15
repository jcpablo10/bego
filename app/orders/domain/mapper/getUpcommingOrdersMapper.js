export default class GetUpcomingOrdersMapper {
  static transform(data) {
    return this.getUpcomingOrders(data)
  }

  static getUpcomingOrders(data) {
    return data.map((item) => {
      return this.getUpcomingOrder(item)
    })
  }

  static getUpcomingOrder(data) {
    return {
      order_number: data.order_number,
      type: data.type,
      status_class: data.status_class,
      status_label: data.status_string,
      pickup: {
        city: 'New York',
        address: data.destinations[0].address,
        start_date: data.start_date,
        end_date: data.end_date,
      },
      dropoff: {
        city: 'Brooklyn',
        address: data.destinations[1].address,
        start_date: data.start_date,
        end_date: data.end_date,
      }
    }
  }
}