import React from "react";

interface MuiCardProps {
    id: string | number;
    date: string;
    image: string;
    category: string;
    title: string;
    preamble: string;
};

const MuiCard: React.FC<MuiCardProps> = ({ id, date, image, category, title, preamble }) => (
    <div>
        {date}
    </div>
);

export default MuiCard;
