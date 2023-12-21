const initialState = {
    users: [
        { id: 1, name: 'Mohamed Allaoui', email: 'allaoui@gmail.com' },
        { id: 2, name: 'Hind Bennani', email: 'benani@gmail.com' }
    ]
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddUser':
            return { ...state, users: [...state, action.payload] }
        case 'UpdateUser':
            const user = state.users.find((u) => u.id === parseInt(action.payload.id))
            if (user) {
                user.name = action.payload.name
                user.email = action.payload.email
            }
            return state
        case 'DeleteUser':
            return {
                ...state, users:
                    [...state.users.filter((u) =>
                        u.id !== parseInt(action.payload))]
            }
        default:
            return state;
    }
}
