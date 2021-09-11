import React from 'react';
import './Rating.css';





export default function Rating(props) {
    const { value, textColor = 'white', starColor = '#f7f406', text } = props;
    const defaultValue = 3.5;

    const _value = value ? (Number(value) / 2).toFixed(1) : defaultValue;

    const getStars = () => {
        let stars = [];
        const [whole, part] = parseFloat(_value).toString().split(".");
        for (let i = 0; i < whole; i++) stars.push(1);
        if (part) stars.push(0.5);
        for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0);

        return stars;
    }

    const renderStars = () => {
        return getStars().map((star, index) => {
            let name = star === 0.5 ? 'star-half' : 'star';

            return <span key={index} className="star" style={{ color: star === 0 ? '' : starColor }} ><ion-icon name={name}></ion-icon></span>
        })
    }

    return (
        <div className="rating">
            {renderStars()}

            <span className={text ? 'inline' : 'hidden'} style={{ color: textColor }}>{_value}</span>
        </div>
    )
}
