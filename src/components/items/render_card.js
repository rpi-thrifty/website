import React, {useState, useEffect} from "react";
import { Typography } from "@mui/material";
import Card from './item_card';

// card width 215
const RenderCard = ( {cards, containerWidth} ) => {
    const [nRender, setnRender] = useState(cards.length);
    const cardWidth = 215;

    useEffect(() => {
        const nFit = Math.floor(containerWidth / cardWidth);
        if (nFit < cards.length && nFit != 0) {
            setnRender(nFit);
        }
    }, [containerWidth]);

    const renderedCards = cards.slice(0, nRender).map( (card, index) => (
        <Card content={card}/>
    ));

    return renderedCards
}

export default RenderCard;
