
const initialState = {
    movies: [
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1283,
            "tenPhim": "Lat mat 48h",
            "biDanh": "lat-mat-48h",
            "trailer": "https://www.youtube.com/embed/w3VI43L_Mn8",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/trainwreck.jpg",
            "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        }
    ]
}

const MovieReducer = ((state = initialState, action) => {
    switch (action.type) {
        default: return { ...state };
    }
});

export default MovieReducer;