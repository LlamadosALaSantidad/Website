import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";
import type Saint from "../../types/saint";
import type Miracle from "../../types/miracle";

type CardProps = | { saint: Saint; miracle?: never } | { miracle: Miracle; saint?: never };

function Card({ saint, miracle }: CardProps) {
    const isSaint = !!saint;
    const data = saint || miracle;
    if (!data) return null;

    const { name, image, location, date, description, slug } = data;

    const path = isSaint 
        ? `${PATHS.SAINTS}/${slug}` 
        : `${PATHS.MIRACLES}/${slug}`;

    return (
        <div className="card">
            <div className="card_header">
                <img src={image} alt={name} />
                <div className="card_tags">
                    {isSaint && saint.categories?.map((cat, i) => (
                        <span key={i}>{cat}</span>
                    ))}
                    {isSaint && saint.tags?.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                    {!isSaint && miracle.region && (
                        <span>{miracle.region}</span>
                    )}
                </div>
            </div>
            <div className="card_text">
                <h3>{name}</h3>
                <div className="card_detail">
                    <div className="card_date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16" stroke-width="1"/></svg>
                        <span>{date}</span>
                    </div>
                    <div className="card_location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 2)" stroke-width="1"><path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg>
                        <span>{location}</span>
                    </div>
                </div>
                <p>{description}</p>
                <Link to={path}>
                    <span>Leer más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" stroke-width="1"/></svg>
                </Link>
            </div>
        </div>
    );
}

export default Card;