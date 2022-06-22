import {
    CLEAR_ERRORS,
    CLEAR_SUCCESS_NOTIFICATION,
    CREATE_EVENT_FAIL,
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    GET_EVENT_FAIL,
    GET_EVENTS_ACTION,
    GET_EVENTS_REQUEST
} from "../constants/Constant";

export const eventReducers = (state={events:[]},action) =>{
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            return { loading: true, events: [] };
        case GET_EVENTS_ACTION:
            return {
                loading: false,
                events: action.payload.data,
            };
        case GET_EVENT_FAIL:
            return { loading: false, error: action.payload };
        case CLEAR_ERRORS:
            return {...state,error: null}
        default:
            return state;
    }
}

export const createEventReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT_REQUEST:
            return { loading: true };
        case CREATE_EVENT_SUCCESS:
            return { loading: false, event: action.payload };
        case CREATE_EVENT_FAIL:
            return { loading: false, error: action.payload };
        case CLEAR_SUCCESS_NOTIFICATION:
            return {...state,event: null}
        case CLEAR_ERRORS:
            return {...state,error: null}
        default:
            return state;
    }
};
