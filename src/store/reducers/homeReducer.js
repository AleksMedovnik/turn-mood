let initialState = {
    users: [
        {name: 'Vasya Pupkin', status: 'In active search', followed: true, id: 0},
        {name: 'Masha Plyushkina', status: 'In active search', followed: true, id: 1},
        {name: 'Victor Hugo', status: 'In search', followed: false, id: 2},
        {name: 'Mark Zuckerberg', status: 'Married', followed: false, id: 3},
        {name: 'Elon Musk', status: 'Married', followed: true, id: 4},
        {name: 'Warren Buffett', status: 'Married', followed: true, id: 5},
        {name: 'Jeff Bezos', status: 'In relationship', followed: false, id: 6},
        {name: 'Jack Ma', status: 'Married', followed: true, id: 7},
        {name: 'Pasha Durov', status: 'In relationship', followed: true, id: 8},
        {name: 'Angry Vegan', status: 'In active search', followed: false, id: 9},
    ],
};

const homeReducer = (state = initialState, action) => {
    return state;
};

export default homeReducer;