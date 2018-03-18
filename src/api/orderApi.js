import JQuery from "jquery";

class ProductApi {
  static placeOrder () {
    var apiPath = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1'

    return JQuery.post(`${apiPath}/Order`, {
      "id": 0,
      "date": "2018-03-18T23:24:40.294Z",
      "customerId": 0,
      "deliveryAddress": "string",
      "contact": "string",
      "storeId": 0,
      "orderItems": [
        {
          "id": 0,
          "orderId": 0,
          "productId": 0,
          "product": {
            "id": 0,
            "storeId": 0,
            "name": "string",
            "description": "string",
            "price": 0
          },
          "price": 0,
          "quantity": 0,
          "total": 0
        }
      ],
      "total": 0,
      "status": "string",
      "lastUpdate": "2018-03-18T23:24:40.294Z"
    })
  }
}

export default ProductApi
