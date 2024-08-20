"use client"
import React from 'react';
import CardWithContentBelowComponent from './cards/card-with-content-below.component';
import { getTitleColor } from '@/utils/getTitleColor';



const CardList = () => {
    const cards = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 4' },
        { id: 5, title: 'Card 5' },
        { id: 6, title: 'Card 6' },
    ];

    return (
        <div>
            {cards.map((card, index) => (
                <>
                    <CardWithContentBelowComponent title={card.title} color={getTitleColor(index)} />
                </>
            ))}
        </div>
    );
};

export default CardList;
