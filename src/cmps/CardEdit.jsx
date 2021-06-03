import { useEffect, useState } from "react"
import { uploadImg } from "../services/cloudinaryService"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { DynamicLink } from "../cmps/DynamicLink"
import { getCardById, saveCard } from "../store/actions/cardActions"
import { CardEditMenu } from "./CardEditMenu"

export function CardEdit() {

    const currCard = useSelector(state => state.cardModule.currCard)

    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [card, setCard] = useState(null)
    const [linkToEdit, setLinkToEdit] = useState(null)
    const [descToEdit, setDescToEdit] = useState(null)

    useEffect(() => {
        dispatch(getCardById(id))
    }, [id, dispatch])

    useEffect(() => {
        if (currCard) {
            setCard({ ...currCard })
        }
    }, [currCard])

    useEffect(() => {
        return history.block((location) => { 
           const isLeave = window.confirm('Your changes will not be saved. Are you shore you want to continue?')
        //    if (isLeave) window.location.replace(location.pathname)
        // //    else window.location.replace(history.)
        return isLeave
        }) 
     },[history]) 


    if (!card) return <h1>Loading</h1>

    const handleChange = ({ target }) => {
        let { name, value } = target
        let newCard = { ...card, data: { ...card.data, [name]: value } }
        setCard(newCard)
    }

    const saveCardChanges = async () => {
        await dispatch(saveCard({ ...card }))
        history.push('/card')
    }

    const saveUploadedImgUrl = async (ev) => {
        const { name } = ev.target
        try {
            const imgUrl = await uploadImg(ev)
            setCard({ ...card, data: { ...card.data, [name]: imgUrl } })
        } catch (err) {
            alert('Could not load photo. Please try again!')
        }
    }

    const setLink = (link = null) => {
        if (descToEdit) setDescToEdit(null)
        if (!link) linkToEdit ? setLinkToEdit(null) : setLinkToEdit({ type: 'link', data: ''})
        else setLinkToEdit(link)
    }

    const setDesc = (desc = null) => {
        if (linkToEdit) setLink(null)
        if (!desc) descToEdit ? setDescToEdit(null) : setDescToEdit({ title: '', txt: ''})
        else setDescToEdit(desc)
    }

    const menuProps = { linkToEdit, setLink, descToEdit, setDesc, card, setCard }
    const { logo, cover, fullName, links, descriptions } = card.data
    return (
        <main className="card-details card-edit main-layout flex col">
            <CardEditMenu props={menuProps} />
            <div className="img-container flex ">
                <img src={cover} className="cover" alt="" />
                <label className="upload nice-btn">Upload Cover Photo
                <input type="file" name="cover" onChange={saveUploadedImgUrl} />
                </label>
            </div>
            <div className="img-container flex ">
                <img src={logo} className=" cover logo" alt="" />
                <label className="upload nice-btn">Upload Logo
                <input type="file" name="logo" onChange={saveUploadedImgUrl} />
                </label>
            </div>
            <input className="fullname" autoComplete="off" type="text" name="fullName" value={fullName} placeholder="Enter Your Name" onChange={handleChange} />
            {/* <p className="description">{description}</p> */}
            { !!links.length && <div className="links flex wrap center">
                {links.map((link) => <div key={Math.random()} onClick={() => setLink(link)}><DynamicLink link={link} active={false} /></div>)}
            </div>}
            {descriptions.map((desc) => (
                <div key={Math.random()} onClick={() => setDesc(desc)} className="show-txt">
                    <h4>{desc.title}</h4>
                </div>))}
            <button onClick={saveCardChanges} className="save nice-btn">Save Changes</button>
        </main>
    )
}