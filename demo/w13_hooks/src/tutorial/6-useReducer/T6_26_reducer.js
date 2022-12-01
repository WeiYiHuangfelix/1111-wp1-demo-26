export const reducer_26 = (state, action) => {
    
    if(action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isMOdalOpen: true,
            modalContent: 'item added'
        }
    }
    if(action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isMOdalOpen: false,
            modalContent: ''
        }
    }
}