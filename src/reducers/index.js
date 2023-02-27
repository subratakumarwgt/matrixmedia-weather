import { combineReducers } from "redux";
import { countries } from "./countries";
import { weather } from "./weather";

const rootReducers = combineReducers(
    {
        countries,
        weather
    }
)
export default rootReducers