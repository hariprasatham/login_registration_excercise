import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
 import dataReducer from './reducer'
 import thunk from 'redux-thunk'

export const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunk)));