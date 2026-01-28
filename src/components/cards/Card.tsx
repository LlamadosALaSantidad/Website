import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";
import type Saint from "../../types/saint";
import type Miracle from "../../types/miracle";
import "./card.scss";

type CardProps = | { saint: Saint; miracle?: never } | { miracle: Miracle; saint?: never };

function Card({ saint, miracle }: CardProps) {
    const isSaint = !!saint;
    const data = saint || miracle;
    if (!data) return null;

    const { name, image, location, date, description, slug } = data;

    const path = isSaint 
        ? `${PATHS.SAINTS}/${slug}` 
        : `${PATHS.MIRACLES}/${slug}`;

    const allTags: string[] = [
        ...(saint?.categories || []),
        ...(saint?.tags || []),
        ...(miracle?.region ? [miracle.region] : [])
    ];

    const visibleTags = allTags.slice(0, 2);
    const hiddenTags = allTags.slice(2);
    const hasMore = allTags.length > 2;

    const tagsToDisplay = hasMore ? visibleTags : allTags;

    return (
        <div className="card">
            <div className="card_header">
                <img src={image} alt={name} className="card_img"/>
            </div>
            <div className="card_tags">
                {tagsToDisplay.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}

                {hasMore && (
                    <div className="tags_more">
                        <span className="dots">...</span>
                        <div className="tags_tooltip">
                            {hiddenTags.join(", ")}
                        </div>
                    </div>
                )}
        </div>
            <div className="card_text">
                <h3>{name}</h3>
                <div className="card_details">
                    <div className="card_date card_detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16" strokeWidth="1"/></svg>
                        <span>{date}</span>
                    </div>
                    <div className="card_location card_detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)" strokeWidth="1"><path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05"/><circle cx="6.5" cy="6.5" r="2.5"/></g></svg>
                        <span>{location}</span>
                    </div>
                </div>
                <p className="card_description">{description}</p>
                <Link to={path} className="card_link">
                    <span>Leer más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" strokeWidth="1"/></svg>
                </Link>
            </div>
        </div>
    );
}

export default Card;