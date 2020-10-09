import React, {useState} from 'react'

//github default data
let defaultValues = {
  results: [],
  hasSearch: false,
  setResults: () => {},
  setSearch: () => {}
}

//instantiate a user context with the methods values
const githubContext = React.createContext(defaultValues)

export default githubContext
