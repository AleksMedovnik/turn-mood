const GET_USERS = 'GET-USERS';
const FOLLOW = 'FOLLOW';

let initialState = {
    users: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return ({ ...state, users: [...state.users, ...action.users] })

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user, followed: action.followed
                        }
                    }
                    return user;
                })
            }

        default:
            return state;
    }
};

export const getUsers = (users) => ({ type: GET_USERS, users })
export const follow = (id, followed) => ({ type: FOLLOW, id, followed })

export default homeReducer;