import { SET_CINEMAS } from "../types/CinemaType";



const initialState = {
    cinemas: [
        {
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "biDanh": "bhd-star-cineplex",
            "logo": "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png"
        }],
    currentCinemas: [
        {
            "maCumRap": "bhd-star-cineplex-3-2",
            "tenCumRap": "BHD Star Cineplex - 3/2",
            "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
            "danhSachRap": [
                {
                    "maRap": 451,
                    "tenRap": "Rạp 1"
                },
                {
                    "maRap": 452,
                    "tenRap": "Rạp 2"
                },
                {
                    "maRap": 453,
                    "tenRap": "Rạp 3"
                },
                {
                    "maRap": 454,
                    "tenRap": "Rạp 4"
                },
                {
                    "maRap": 455,
                    "tenRap": "Rạp 5"
                },
                {
                    "maRap": 456,
                    "tenRap": "Rạp 6"
                },
                {
                    "maRap": 457,
                    "tenRap": "Rạp 7"
                },
                {
                    "maRap": 458,
                    "tenRap": "Rạp 8"
                },
                {
                    "maRap": 459,
                    "tenRap": "Rạp 9"
                },
                {
                    "maRap": 460,
                    "tenRap": "Rạp 10"
                }
            ]
        }

    ]

}

const CinemaReducer = ((state = initialState, action) => {
    switch (action.type) {
        case SET_CINEMAS: {
            return { ...state, cinemas: action.cinemas };
        }

        default: return { ...state };
    }
});

export default CinemaReducer;