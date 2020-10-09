//import our user constants
import userConstants from '../constants/user.constants'

//set initial values
const initialState = {
  user: null,
  isLoggedIn: false
}

function authentication(state = initialState, action) {

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
export default authentication
