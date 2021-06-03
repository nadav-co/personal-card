import { useEffect, useState } from "react"

export function AddDescription({ currDesc, saveDesc }) {

    const [desc, setDesc] = useState({ ...currDesc })
    const [textareaHeight, setTextareaHeight] = useState(null)
    const handleChange = ({ target }) => {
        const { name, value } = target
        const newDesc = { ...desc, [name]: value }
        setDesc(newDesc)
    }


    useEffect(() => {
        setDesc({ ...currDesc })
    }, [currDesc])

    useEffect(() => {
        const height = desc.txt.length / 17
        console.log(height);
        setTextareaHeight(height)
    }, [desc])

    const onSaveDesc = () => {
        saveDesc(desc)
    }

    return <div className="add">
        <div className="add-desc">
            <input type="text" name="title" value={desc.title} onChange={handleChange} placeholder="Enter Text Title" />
            <textarea name="txt" value={desc.txt} onChange={handleChange} placeholder="Enter Text" style={{ height: `${textareaHeight}em` }} />
            <button onClick={onSaveDesc} className="nice-btn">Save</button>
        </div>
    </div>
}