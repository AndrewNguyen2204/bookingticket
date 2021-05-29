import React, { useState } from 'react'

export default function Cinema(props) {

    const [active, setActive] = useState(0);

    const { i, cinema } = props;



    return (
        <div className={active === i ? "cinema-content active" : "cinema-content"} onClick={()=>{
            setActive(i);
        }}>

            <div className="flex flex-col">
                <div>
                    <h2 className="text-sm font-semibold">{cinema.tenCumRap}</h2>
                    <span className="text-sm text-coolGray-600">
                        {cinema.diaChi}
                    </span>
                </div>
            </div>
        </div>
    )
}
