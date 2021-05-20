import { GET_BANNERS } from "../types/CarouselType";
import { movieService } from "../../services/MovieService";



// Thunk Action



export const getBannersAction = () => {


    return async(dispatch) => {
        try {
            const result = await movieService.getBanners();            
            dispatch({
                type: GET_BANNERS,
                banners: result.data.content
            })

        } catch (err) {
            console.log('error', err);
        }
    }

}