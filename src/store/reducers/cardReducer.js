const favCardsIds = JSON.parse(localStorage.getItem('favCardsIds'))
const initialState = {
    cards: [],
    currCard: null,
    favCardsIds,
    favCards: []
}

export function cardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state, cards: action.cards }
        case 'SET_CARD':
            return {...state, currCard: action.card}
        case 'SET_FAV_CARDS_IDS':
            return {...state, favCardsIds: action.favCardsIds}
        case 'SET_FAV_CARDS':
            return {...state, favCards: action.favCards}
        default:
            return state
    }
}