import { GET_BANNERS } from "../types/CarouselType";

const initialState = {
    banners: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
};


const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNERS: {

           
            return { ...state, banners: action.banners };
        }
        default: return { ...state };
    }

}

export default CarouselReducer;