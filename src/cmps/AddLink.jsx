import { useEffect, useState } from "react"

export function AddLink({ currLink, saveLink }) {
    const linkTypes = { link: 'Enter Url', instagram: 'Enter Url', facebook: 'Enter Url', whatsapp: 'Enter Phone Number', phone: 'Enter Phone Number' }
    const [link, setLink] = useState({ ...currLink })
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newLink = { ...link, [name]: value }
        setLink(newLink)
    }

    useEffect(() => {
        setLink({ ...currLink })
    }, [currLink])

    const onSaveLink = () => {
        saveLink(link)
    }

    return <div className="add">
        <div className="add-link">
            <select name="type" value={link.type} onChange={handleChange}>
                {Object.keys(linkTypes).map((type) =>
                (<option key={Math.random()} value={type}>{type}</option>
                ))}
            </select>
            <input type="text" name="data" value={link.data} onChange={handleChange} placeholder={linkTypes[link.type]} />
            <button onClick={onSaveLink} className="nice-btn">Save</button>
        </div>
    </div>
}