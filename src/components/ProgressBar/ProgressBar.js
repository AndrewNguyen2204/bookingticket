import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress=0,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((10 - progress) / 10) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <div className="progressBar" style={{width:size,height:size}}>
            <svg
                className="svg"
                width={size}
                height={size}
            >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <span className="svg-circle-text">
                {progress}
            </span>
        </div>
    );
}

// ProgressBar.propTypes = {
//     size: PropTypes.number.isRequired,
//     progress: PropTypes.number.isRequired,
//     strokeWidth: PropTypes.number.isRequired,
//     circleOneStroke: PropTypes.string.isRequired,
//     circleTwoStroke: PropTypes.string.isRequired
// }

export default ProgressBar;
