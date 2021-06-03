import { useState } from "react"

export function ShowTxt({ desc }) {
    const [isShow, setIsShow] = useState(false)
    const scroll = (ev) => ev.target.scrollIntoView()
    return (
        <div onClick={(ev) => { setIsShow(!isShow); setTimeout(scroll, 0.5, ev) }} className="show-txt">
            <h4>{desc.title}</h4>
            {isShow && <p>{desc.txt}</p>}
        </div>
    )
}