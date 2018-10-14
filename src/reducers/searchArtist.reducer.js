import statesConstants from 'constants/states.constants';

const initialState = {
    loading: false,
    artist: { artistName: '' },
    artists: [],
};

const searchArtistReducer = (state = initialState, action) => {
    switch (action.type) {
        case statesConstants.SEARCH_ARTIST_LOADING:
            return {
                ...state,
                loading: true,
            };

        case statesConstants.SEARCH_ARTIST_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case statesConstants.SEARCH_ARTIST_SUCCESS:
            return {
                ...state,
                artists: action.artists,
                loading: false,
            };
        case statesConstants.SEARCH_ARTIST_HANDLE_CHANGE:
            return {
                ...state,
                artist: action.artist,
            };
        default:
            return state;
    }
};

export default searchArtistReducer;
