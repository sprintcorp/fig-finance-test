import axios from "axios";
import {
    GET_EVENT_FAIL,
    GET_EVENTS_ACTION,
    GET_EVENTS_REQUEST,
    CLEAR_ERRORS, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAIL, CREATE_EVENT_REQUEST, CLEAR_SUCCESS_NOTIFICATION
} from "../constants/Constant";
import {BACKEND_URL} from "../../server";


export const getEventsAction = () => async(dispatch)=>{
    try{
        dispatch({type:GET_EVENTS_REQUEST});
        const {data} = await axios(BACKEND_URL+"/events");
        dispatch({ type: GET_EVENTS_ACTION, payload: data });
    }catch (error){
        dispatch({
            type: GET_EVENT_FAIL,
            payload:
              error && error.code === 'ERR_NETWORK'
                ? error.message
                : error.message,
        });
    }
}

export const getEventsByCategory = (search) => async(dispatch)=>{
    try{
        dispatch({type:GET_EVENTS_REQUEST});
        const {data} = await axios(BACKEND_URL+"/events/filter?category="+search);
        dispatch({ type: GET_EVENTS_ACTION, payload: data });
    }catch (error){
        dispatch({
            type: GET_EVENT_FAIL,
            payload:
              error && error.code === 'ERR_NETWORK'
                ? error.message
                : error.message,
        });
    }
}

export const createUserEvent = (title, description,
                                date, isVirtual, category,
                                address) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_EVENT_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
          BACKEND_URL+`/events`,
          { title, description, date, isVirtual, category, address },
          config
        );
        dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CREATE_EVENT_FAIL,
            payload:
              error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        });
    }
}


export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:  CLEAR_ERRORS
    })
}

export const clearSuccessNotification = () => async(dispatch) => {
    dispatch({
        type:  CLEAR_SUCCESS_NOTIFICATION
    })
}

