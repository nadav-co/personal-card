import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CardPreview } from "../cmps/CardPreview"
import { Loading } from "../cmps/Loading"
import { getCards } from "../store/actions/cardActions"

export function CardList() {

    const cardsFromStore = useSelector(state => state.cardModule.cards)
    const [cards, setCard] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch])

    useEffect(() => {
        if (cardsFromStore) {
            setCard([...cardsFromStore])
        }
    }, [cardsFromStore])

    if (!cards) return <Loading />

    return (
        <main className="card-list flex wrap">
            { cards.map((card) => <CardPreview key={Math.random()} card={card} actions={true} />)}
        </main>
    )
}