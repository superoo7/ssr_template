import {
    FETCH_USERS
} from '../actions';

export default (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_USERS:
            console.log('FETCH')
            return action.payload.data;
        default:
            return state;
    }
}