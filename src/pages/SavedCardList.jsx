import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardPreview } from "../cmps/CardPreview";
import { Loading } from "../cmps/Loading";
import { getFavCards } from "../store/actions/cardActions";

export function SavedCardList(){
    const favCardsIds = useSelector(state => state.cardModule.favCardsIds)
    const favCards = useSelector(state => state.cardModule.favCards)
    const [cards, setCards] = useState([])
    const dispatch  = useDispatch()

    useEffect(() => {
            (async() => {
                if (!favCardsIds) return
                const cards = await dispatch(getFavCards(favCardsIds))
                setCards(cards)
            })()
      
    }, [favCardsIds])
    if (!favCards) return <Loading/>
    if (!favCards.length) return <h1>your saved cards will apper here</h1>
    return <section className="saved-cards card-list flex wrap">
            { favCards.map((card) => <Link to={`/card/${card._id}`}><CardPreview key={Math.random()} card={card} /></Link>)}
    </section>
    
}