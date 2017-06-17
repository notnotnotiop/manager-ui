export const FETCHING_USER = 'FETCHING_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export function getUser(id) {
  console.log('action:getUser', id)
  return (dispatch) => {
    dispatch({
      type: FETCHING_USER
    })

    setTimeout(() => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        user: {
          id: 'xxxxxx1',
          name: 'Stuart Runyan',
          email: 'stuart@zesty.io',
          role: 'admin',
          products: ['code', 'seo', 'leads', 'analytics', 'forms', 'audit-trail', 'social']
        }
      })
    }, 3000)

    // fetch(`http://localhost:9001/user/${id}`)
    //   .then(res => res.json())
    //   .then(user => {
    //     console.log('user', user)
    //     dispatch({
    //       type: FETCH_USER_SUCCESS,
    //       id,
    //       user
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //     dispatch({
    //       type: FETCH_USER_ERROR,
    //       id,
    //       err
    //     })
    //   })
  }
}

export function user(state = {
  products: ['content', 'media']
}, action) {
  switch(action.type) {
    case FETCHING_USER:
      // TODO show loading state?

    case FETCH_USER_SUCCESS:
      return {...action.user}

    case FETCH_USER_ERROR:
      // TODO handle failure
      //
    default:
      return state
  }
}
