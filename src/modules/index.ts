import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import names from "./names"

const rootReducers = combineReducers({
    counter,
    todos,
    names
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
