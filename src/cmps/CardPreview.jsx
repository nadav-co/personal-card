import { CardContent } from "./CardContent"
import { Link } from "react-router-dom";

export function CardPreview({ card, actions = false }) {
    return <main className="card-preview">
        <section className="card-content">
            <CardContent card={card} active={false} />
        </section>
        {actions &&
            <div className="actions flex">
                <Link to={`/card/${card._id}`} className="view nice-btn flex center">View</Link>
                <Link to={`/card/edit/${card._id}`} className="edit nice-btn flex center">Edit</Link>
            </div>}
    </main>
}