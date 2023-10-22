import {combineReducers} from "redux";


const transactionInputReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    transactionInputReducer
});


export default rootReducer;