import { combineReducers } from 'redux';

import { reducer as counterReducer } from './counter';
import { reducer as profileReducer } from './profile';

// The purpose of rootReducer is to combine all our feature reducers into a single reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer
})

export { rootReducer };
