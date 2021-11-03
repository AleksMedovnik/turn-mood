const GET_MESSAGES = 'SET-MESSAGES';

let initialState = {
    chat: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return ({ ...state, chat: [...state.chat, ...action.chat] })

        default:
            return state;
    }
};

export const getChat = (chat) => ({ type: GET_MESSAGES, chat });

export default chatReducer;