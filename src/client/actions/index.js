import axios from 'axios'

const ROOT_URL = 'http://react-ssr-api.herokuapp.com'

export const FETCH_USERS = 'fetch_users'


export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get(`${ROOT_URL}/users`)
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}