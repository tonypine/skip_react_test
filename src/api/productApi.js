import JQuery from "jquery";

class ProductApi {
  static get () {
    var apiPath = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1'

    return JQuery.get(`${apiPath}/Product`)
  }
}

export default ProductApi
