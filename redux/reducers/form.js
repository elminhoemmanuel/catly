import {  INCR_STEP , DECR_STEP, SET_METHOD, TOGGLE_EXP, SET_POS, RESET_STEP }  from "../types";


const initialState = {
  step:1,
  method:"bvn",
  explain:false,
  pos:"no",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    case DECR_STEP:
      return {
        ...state,
        step: state.step - 1
      };
    case RESET_STEP:
      return {
        ...state,
        step: 1
      };
    case SET_METHOD:
      return {
        ...state,
        method: action.payload
      };
    case SET_POS:
      return {
        ...state,
        pos: action.payload
      };
    case TOGGLE_EXP:
      return {
        ...state,
        explain: !state.explain
      };
    default:
      return state;
  }
};