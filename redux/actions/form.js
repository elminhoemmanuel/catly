import { SET_METHOD, TOGGLE_EXP, SET_POS } from "../types";

//action to set verification method
export const setMethod = (method) => (dispatch) => {

    dispatch({ 
        type: SET_METHOD,
        payload:method
    })

}

//action to set  POS choice
export const setPos = (value) => (dispatch) => {

    dispatch({ 
        type: SET_POS,
        payload:value
    })

}

//action to toggle explainer
export const toggleExp = () => (dispatch) => {

    dispatch({ 
        type: TOGGLE_EXP,
    })

}










