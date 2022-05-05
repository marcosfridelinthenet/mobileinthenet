import { SET_DELIVERY_LIST, SET_SHOW_MAP } from "../actions/delivery.action";

const initialState = {
    showmap: false,
    list: []
}

const DeliveryReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_SHOW_MAP:
        return { ...state, showmap: action.showmap }
    case SET_DELIVERY_LIST:
        return { ...state, list: action.list }
    default:
        return state;
    }
}

export default DeliveryReducer;