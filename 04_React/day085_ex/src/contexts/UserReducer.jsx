export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: action.id,
                        text: action.text,
                        isChk: false
                    }
                ],
                text: ''
            }
        case 'CHANGE_INPUT':
            return {
                ...state,
                text: action.text
            }
        case 'EDIT':
            return {
                ...state,
                data: state.data.map(item => item.id === action.current.id ? { ...item, text : action.current.text } : item)
            };
        case 'TOGGLE':
            return {
                ...state,
                data: state.data.map(item => item.id === action.id ? { ...item, isChk: !item.isChk } : item)
            };
        case 'DEL':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}