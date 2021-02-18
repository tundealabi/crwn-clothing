import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistedReducer from './root-reducer';
// import rootReducer from './root-reducer';


const middleWares = [logger];

const store = createStore(persistedReducer, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export  { store, persistor };
