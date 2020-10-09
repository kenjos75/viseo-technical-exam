import React from 'react'

//user data
let defaultValues = {
  isLoggedIn: false,
  user: {}
}

//instantiate a user context with the methods values
const userContext = React.createContext(defaultValues)

export default userContext
