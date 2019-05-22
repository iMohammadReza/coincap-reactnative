import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })   
        return axios.get(`${apiBaseURL}/assets?limit=30`)   
            .then(res => {
                console.log("data", res.data.data)
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data });                
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });   

    }
}

