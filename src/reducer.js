const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state,
            cartItems: [...state.cartItems, action.payload]
            }
        
        case 'REMOVE_ITEM':
            return {...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export default reducer;