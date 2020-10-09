import { userConstants } from '../constants'

//set initial values
const initialState = {
  user: null,
  isLoggedIn: false
}

export function authentication(state = initialState, action) {

  //uses switch case for scalable purpose
  switch (action.type) {

    case userConstants.SET_STATE:

        let checkValues = [
          'user',
          'isLoggedIn'
        ]

        checkValues.map(checkValue => {
          if (action.formName==checkValue) {
            state[checkValue] = action.obj
            return state
          }
        })

    default:
      return state
  }
}
