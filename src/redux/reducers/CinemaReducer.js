import { SET_CINEMAS, SET_LOGOS, SET_MOVIE_LIST, SET_SHOWTIMES_DATA } from "../types/CinemaType";



const initialState = {
    logos: [
        {
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "biDanh": "bhd-star-cineplex",
            "logo": "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png"
        }],
    cinemas: [
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
                }
            ]
        }

    ],
    showtimesData: [],
    movieList: [


        {
            "lstLichChieuTheoPhim": [
                {
                    "maLichChieu": 16099,
                    "maRap": "467",
                    "tenRap": "Rạp 7",
                    "ngayChieuGioChieu": "2019-01-01T10:10:00",
                    "giaVe": 75000
                },
                {
                    "maLichChieu": 16100,
                    "maRap": "467",
                    "tenRap": "Rạp 7",
                    "ngayChieuGioChieu": "2019-01-01T12:10:00",
                    "giaVe": 75000
                }
            ],
            "maPhim": 1314,
            "tenPhim": "Yêu tinh 123456",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/yeu-tinh-123456_gp01.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }


    ]

}

const CinemaReducer = ((state = initialState, action) => {
    switch (action.type) {
        case SET_LOGOS: {
            return { ...state, logos: action.logos };
        }
        case SET_CINEMAS: {
            return { ...state, cinemas: action.cinemas };
        }
        case SET_SHOWTIMES_DATA: {
            return { ...state, showtimesData: action.data[0].lstCumRap };
        }
        case SET_MOVIE_LIST: {
            let newMovieList = [];
            let newShowtimesData = state.showtimesData.filter(data => data.maCumRap === action.maCumRap);
            if (newShowtimesData) {
                newMovieList = newShowtimesData[0].danhSachPhim;
            }



            return { ...state, movieList: newMovieList };
        }
        default: return { ...state };
    }
});

export default CinemaReducer;