import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getCardById, toggleSaveToFavs } from "../store/actions/cardActions"
import { CardContent } from "../cmps/CardContent"

export function CardDetails() {

    const currCard = useSelector(state => state.cardModule.currCard)
    const favCardsIds = useSelector(state => state.cardModule.favCardsIds)
    const loggedUser = useSelector(state => state.userModule.loggedUser)
    const { id } = useParams()
    const [card, setCard] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getCardById(id))
    }, [id, dispatch])

    useEffect(() => {
        if (currCard) {
            setCard({ ...currCard })
        }
    }, [currCard])

    if (!card) return <h1>Loading</h1>
    const isFav = favCardsIds?.includes(card._id)
    return (
        <main className="main-layout">
            {(loggedUser?._id === card.owner?._id) ?
                <button onClick={() => history.push(`/card/edit/${card._id}`)} className="edit-btn nice-btn">Edit</button> :
                <button onClick={() => dispatch(toggleSaveToFavs(card._id))} className="edit-btn nice-btn">{isFav ? 'Remove From Favorites' : 'Add To Favorites'} </button>}
            <CardContent card={card} />
        </main>
    )
}