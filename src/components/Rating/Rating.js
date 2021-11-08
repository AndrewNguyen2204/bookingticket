import React from 'react';
import './Rating.css';


const MAX_VALUE = 10;
const MAX_STAR = 5;


export default function Rating(props) {
    const { value = '3.5', textColor = 'white', starColor = '#f7f406', text } = props;

    // Fix value prop > MAX_VALUE
    const fixValue = value > MAX_VALUE ? MAX_VALUE : value;

    const divider = MAX_VALUE/MAX_STAR;

    const _value = (Number(fixValue) / divider).toFixed(1);

    const getStars = () => {
        let stars = [];
        const [whole, part] = parseFloat(_value).toString().split(".");
        for (let i = 0; i < whole; i++) stars.push(1);
        if (part) stars.push(0.5);
        for (let i = whole; i < (part ? (MAX_STAR-1) : MAX_STAR); i++) stars.push(0);

        return stars;
    }

    const renderStars = () => {
        return getStars().map((star, index) => {
            let name = star === 0.5 ? 'star-half' : 'star';

            return <span key={index} className="rating-star" style={{ color: star === 0 ? 'transparent' : starColor }} ><ion-icon name={name}></ion-icon></span>
        })
    }

    return (
        <div className="rating flex items-center">
            {renderStars()}

            <span className={text ? 'rating-text inline' : 'hidden'} style={{ color: textColor }}>{_value}</span>
        </div>
    )
}
