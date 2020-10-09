import config from '../config/config'

//create github service responsible for fetching request
const githubService = {
  search
}

function search(query) {

  //set request header options
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //set additional query
  const additionalQuery = `?q=${query}`

  return fetch(`${config.apiGateway.URL}${config.Github.endpoints.search}${additionalQuery}`, requestOptions)
  .then(handleResponse)
  .then( response => {

    //extract results
    let { items } = response

    //check if results is not undefined and results.items is not undefined
    if (typeof items!=='undefined') {
      return Promise.resolve({
        status: 'ok',
        results: items
      })
    } else {
      //if not okay then we will resolve with failed Promise
      return Promise.reject({
        status: 'not ok'
      })
    }

  }).catch(e => {
    //failed promise goes here too
    return Promise.reject({
      status: 'not ok'
    })
  })

}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    return data
  })
}

export default githubService
