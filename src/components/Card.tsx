import React from "react";
import "../styles/card.scss";

interface MuiCardProps {
    id: string | number;
    date: string;
    image: string;
    category: string;
    title: string;
    preamble: string;
};

const MuiCard: React.FC<MuiCardProps> = ({ id, date, image, category, title, preamble }) => (
    <div id={`${id}`} className="card">
        {image && (
            <div className="card__img-container">
                <img src={image} alt="" />
            </div>
        )}
        <div className="card__labels">
            <h2 className="card__labels--header">{title}</h2>
            <p className="card__labels--preamble">{preamble}</p>
            <div className="card__date">{date}</div>
        </div>
    </div>
);

export default MuiCard;
