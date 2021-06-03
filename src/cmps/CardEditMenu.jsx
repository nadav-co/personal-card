import { useState } from "react"
import { useSelector } from "react-redux"
import { AddLink } from "./AddLink"
import { utilService } from "../services/utilService"
import { AddDescription } from "./AddDescription"

export function CardEditMenu({ props }) {

    const { loggedUser } = useSelector(state => state.userModule)

    const [isOpen, setIsOpen] = useState(false)
    const { linkToEdit, setLink, descToEdit, setDesc, card, setCard } = props

    const setTheme = (theme) => {
        setCard({ ...card, style: { ...card.style, theme } })
    }

    const saveLink = (link) => {
        if (link.id) var links = card.data.links.map((l) => (l.id === link.id) ? link : l)
        else links = [...card.data.links, {...link, id: utilService.makeId()}]
        setCard({...card, data: {...card.data, links}})
        setLink(null)
    }

    const saveDesc = (desc) => {
        if (desc.id) var descriptions = card.data.descriptions.map((d) => (d.id === desc.id) ? desc : d)
        else descriptions = [...card.data.descriptions, {...desc, id: utilService.makeId()}]
        setCard({...card, data: {...card.data, descriptions}})
        setDesc(null)
    }
    const togglePublished = () => {
        const {isPublished} = card.data
        setCard({...card, data: {...card.data, isPublished: !isPublished}})
    }
    
    const themes = [
        'classic',
        'elegant',
        'bla',
        'blabla',
        'bobob',
        'mont',
    ]
    const isMenuOpen = isOpen || linkToEdit || descToEdit

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`card-menu${isMenuOpen ? '' : ' close'}`}>
            <div className="content" onClick={(ev) => ev.stopPropagation()}>
                <section className="user flex center space-bt">
                    <img src={loggedUser.imageUrl || '../assets/img/contact.png'} alt="" />
                    <span>Hello {loggedUser.givenName || loggedUser.fullname}! <br /> Nice to see you.</span>
                </section>
                <hr />
                <section className="theme">
                    <h4>Choose theme:</h4>
                    <div className="flex wrap center">

                    </div>
                    {themes.map((theme) => <button className={`nice-btn ${(card.style.theme === theme) ? 'bold' : ''}`} key={Math.random()} onClick={() => setTheme(theme)}>{theme}</button>)}
                </section>
                <hr />
                <section className="actions">
                    <button onClick={() => setLink()} className="nice-btn">{(linkToEdit) ? 'cancel' : 'Add Link'}</button>
                    {linkToEdit && <AddLink currLink={linkToEdit} saveLink={saveLink}/>}
                    <button onClick={() => setDesc()} className="nice-btn">{(descToEdit) ? 'cancel' : 'Add Text Section'}</button>
                    {descToEdit && <AddDescription currDesc={descToEdit} saveDesc={saveDesc}/>}
                </section>
                <hr />
                { !descToEdit && !linkToEdit &&
                    <section className="actions">
                    <button className="nice-btn">Discard</button>
                    <button className="nice-btn">Go To My Cards</button>
                    <hr />
                    <button onClick={togglePublished} className="nice-btn publish">{card.data.isPublished ? 'Un Publish' : 'Publish'}</button>
                </section>
                }
            </div>
        </div>
    )
}