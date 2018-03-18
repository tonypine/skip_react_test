class customerApi {
  static create (props) {
    var apiPath = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1'
    return fetch(`${apiPath}/Customer`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: props.userName,
        email: props.userEmail,
        address: props.userAddress,
        password: props.userPassword
      })
    })
  }
}

export default customerApi
