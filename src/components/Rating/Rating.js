import React from 'react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Rating.css';





export default function Rating(props) {
    const { value = '3.5', textColor = 'white', starColor = '#f7f406', text } = props;

    const getStars = (value) => {
        const stars = [];
        const [whole, part] = parseFloat(value).toString().split(".");
        for (let i = 0; i < whole; i++) stars.push(1);
        if (part) stars.push(0.5);
        for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0);

        return stars;
    }

    const renderStars = () => {
        return getStars(value).map((star, index) => {
            return <FontAwesomeIcon key={index} className="star" icon={star === 0.5 ? faStarHalfAlt : faStar} style={{ color: star === 0 ? '' : starColor }} />
        })
    }

    return (
        <div className="rating">
            {renderStars()}

            <span className={text ? 'inline' : 'hidden'} style={{ color: textColor }}>{value}</span>
        </div>
    )
}
