import { httpService } from '../services/httpService.js';
export const cardService = {
    getById,
    saveCard,
    query,
    toggleSaveToFavs,
    getFavCards
}

async function query() {
    try {
        const cards = await httpService.get('card')
        return cards
    } catch (err) {
        console.log(err);
    }
}

async function getById(id) {
    if (!id) return _getEmptyCard()
    try {
        const card = await httpService.get(`card/${id}`)
        return card
    } catch (err) {
        console.log(err);
    }
}

async function saveCard(card) {
    try {
        if (card._id) var savedCard = await httpService.put(`card/${card._id}`, card)
        else savedCard = await httpService.post('card', card)
        return savedCard
    } catch (err) {
        console.log(err);
    }
}

function toggleSaveToFavs(cardId){
    var favCards = JSON.parse(localStorage.getItem('favCardsIds'))
    if (!favCards) {
        localStorage.setItem('favCardsIds', JSON.stringify([cardId]))
        return [cardId]
    }
    const idx = favCards.findIndex((id) => cardId === id)
    if (idx === -1) favCards.push(cardId)
    else favCards.splice(idx, 1)
    localStorage.setItem('favCardsIds', JSON.stringify(favCards))
    return favCards
}

async function getFavCards(ids){
    const cards = await Promise.all(ids.map(async (id) => await getById(id)))
    return cards
}

function _getEmptyCard() {
    return {
        style: {},
        data: {
            isPublished: false,
            fullName: '',
            descriptions: [],
            cover: null,
            logo: null,
            links: []
        }
    }
}