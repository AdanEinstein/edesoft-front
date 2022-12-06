import { client } from '.';

const url = '/users';

export function fetchUsers(){
  return dispatch => {
    dispatch({
      type: 'FETCH_USER',
      payload: client.get(url)
    })
  }
}

export function newUser() {
  return dispatch => {
    dispatch({
      type: 'NEW_USER'
    })
  }
}

export function saveUser(user) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_USER',
      payload: client.post(url, user)
    })
  }
}

export function fetchUser(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_USER',
      payload: client.get(`${url}/${id}`)
    })
  }
}

export function updateUser(user) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_USER',
      payload: client.put(`${url}/${user.id}`, user)
    })
  }
}

export function deleteUser(id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_USER',
      payload: client.delete(`${url}/${id}`)
    })
  }
}
