import { cardService } from "../../services/cardService";

export function getCards() {
    return async dispatch => {
        try {
            const cards = await cardService.query()
            dispatch({ type: 'SET_CARDS', cards })
            return cards
        } catch (err) {
            console.log(err)
        }
    }
}
export function getCardById(id) {
    return async dispatch => {
        try {
            const card = await cardService.getById(id)
            dispatch({ type: 'SET_CARD', card })
            return card
        } catch (err) {
            console.log(err)
        }
    }
}
export function saveCard(newCard) {
    return async dispatch => {
        try {
            const card = await cardService.saveCard(newCard)
            dispatch({ type: 'SET_CARD', card })
            return card
        } catch (err) {
            console.log(err)
        }
    }
}

export function toggleSaveToFavs(cardId) {
    return async dispatch => {
        try {
            const favCardsIds = await cardService.toggleSaveToFavs(cardId)
            dispatch({ type: 'SET_FAV_CARDS_IDS', favCardsIds })
            return favCardsIds
        } catch (err) {
            console.log(err)
        }
    }
}

export function getFavCards(ids) {
    return async dispatch => {
        try {
            const favCards = await cardService.getFavCards(ids)
            dispatch({ type: 'SET_FAV_CARDS', favCards })
            return favCards
        } catch (err) {
            console.log(err)
        }
    }
}