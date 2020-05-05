import { combineReducers } from 'redux';

import { reducer as counterReducer } from './counter';

// The purpose of rootReducer is to combine all our feature reducers into a single reducer
const rootReducer = combineReducers({
    counter: counterReducer
    // add new feature reducers here
})

export { rootReducer };
