/* import { createStore } from "redux";

import SettingReducer from "./reducers/setting.reducer";

export default createStore(SettingReducer); */

import { createStore, combineReducers } from "redux";

import DeliveryReducer from "./reducers/delivery.reducer";
import SettingReducer from "./reducers/setting.reducer";

//export default createStore(DeliveryReducer);
export default createStore(
    combineReducers({
        setting: SettingReducer,
        delivery: DeliveryReducer
    })
);