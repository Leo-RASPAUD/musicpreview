import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import app from './app.reducer';
import searchArtist from './searchArtist.reducer';
import artistDetails from './artistDetails.reducer';

const mainReducer = combineReducers({
    loadingBar: loadingBarReducer,
    router: routerReducer,
    searchArtist,
    artistDetails,
    app,
});

export default mainReducer;
