import React, {useState, useEffect} from "react";
import Card from './item_card';

// card width 215
const Render_Card = ( {cards, containerWidth} ) => {
    const [numCardsToRender, setNumCardsToRender] = useState(cards.length);
    const cardWidth = 215;

    useEffect(() => {
        const numCardsThatFit = Math.floor(containerWidth / cardWidth);
        if (numCardsThatFit < cards.length) {
            setNumCardsToRender(numCardsThatFit);
        }
    }, [cardWidth, cards.length, containerWidth]);

    const renderedCards = cards.slice(0, numCardsToRender).map((card, index) => (
        Card(card)
    ));

    return renderedCards;
};

export default Render_Card;