const intit = { num: 20 }
export const reducer = (state = intit, action) => {
    switch (action.type) {
        case 'Incrementer':
            return { ...state, num: state.num + 1 }
        case 'Decrementer':
            return { ...state, num: state.num - 1 }
        case 'Reset':
            return { ...state, num: 0 }
        default:
            return state
    }
} 
