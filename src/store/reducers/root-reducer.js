import {INFO_REQUEST, INFO_SUCCESS} from "../actions/action-type";

const initialState = {
    info: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INFO_REQUEST:
            return {
                ...state,
                loading: true
            };
        case INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.info
            };
        default:
            return state;
    }
};

export default reducer;