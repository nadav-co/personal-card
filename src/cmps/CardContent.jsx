import { DynamicLink } from "./DynamicLink"
import { ShowTxt } from "./ShowTxt"

export function CardContent({ card, active }) {
    const { logo, cover, descriptions, fullName } = card.data
    return <main className="card-details flex col">
        <img src={cover} className="cover" alt="" />
        <img src={logo} className="logo" alt="" /> 
       {fullName && <h1 className="name">{fullName}</h1>}
        <div className="links flex wrap center">
            {card.data.links.map((link) => <DynamicLink link={link} active={active} key={Math.random()} />)}
        </div>
        {descriptions.map((desc)=> <ShowTxt key={Math.random()} desc={desc} />)}
        
    </main>
}