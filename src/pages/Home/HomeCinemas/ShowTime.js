import React from 'react'

export default function ShowTime() {
    return (
        <div className="showtime-content">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-10 sm:w-10 sm:mb-0">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="abc" />
            </div >
            <div className="flex w-full">
                <div className="w-full">
                    <h2 className="text-sm font-semibold">Movie's Name</h2>
                    <span className="text-sm text-coolGray-600">Movie's infomations</span>
                    <div className="showtime-details">
                        <span>12:00</span>
                        <span>14:00</span>
                        <span>16:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
