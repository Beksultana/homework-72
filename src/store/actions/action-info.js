import axios from '../../axio';
import {INFO_ERROR, INFO_REQUEST, INFO_SUCCESS} from "./action-type";

export const infoRequest = () => ({type: INFO_REQUEST});
export const infoSuccess = info => ({type: INFO_SUCCESS, info});
export const infoError = () => ({type: INFO_ERROR});

export const getInfo = () => {
    return dispatch => {
        dispatch(infoRequest());

        return axios.get('pics.json')
            .then(response => {
                const result = response.data;
                const children = result.data.children;
                dispatch(infoSuccess(children))
            }
        )
    }
};