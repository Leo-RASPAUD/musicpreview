import statesConstants from 'constants/states.constants';
import itunesService from 'services/itunes.service';

const handleChangeArtistAction = ({ artist }) => ({
    type: statesConstants.SEARCH_ARTIST_HANDLE_CHANGE,
    artist,
});

const searchArtistLoadingAction = () => ({ type: statesConstants.SEARCH_ARTIST_LOADING });
const searchArtistFailureAction = ({ error }) => ({
    type: statesConstants.SEARCH_ARTIST_FAILURE,
    error,
});
const searchArtistSuccessAction = ({ artists }) => ({
    type: statesConstants.SEARCH_ARTIST_SUCCESS,
    artists,
});

const getArtistSongsLoadingAction = () => ({ type: statesConstants.GET_ARTIST_SONGS_LOADING });
const getArtistSongsFailureAction = ({ error }) => ({
    type: statesConstants.GET_ARTIST_SONGS_FAILURE,
    error,
});
const getArtistSongsSuccessAction = ({ songs }) => ({
    type: statesConstants.GET_ARTIST_SONGS_SUCCESS,
    songs,
});

const searchArtist = ({ artist }) => async dispatch => {
    dispatch(searchArtistLoadingAction());
    try {
        const result = await itunesService.searchArtist({ artist });
        dispatch(searchArtistSuccessAction({ artists: result.data.results }));
    } catch (error) {
        dispatch(searchArtistFailureAction({ error: 'Could not get the artist list' }));
    }
};

const getArtistSongs = ({ id }) => async dispatch => {
    dispatch(getArtistSongsLoadingAction());
    try {
        const result = await itunesService.searchSongsById({ id });
        dispatch(getArtistSongsSuccessAction({ songs: result.data.results }));
    } catch (error) {
        dispatch(
            getArtistSongsFailureAction({ error: 'Could not get the songs, try again later' }),
        );
    }
};

const handleChangeArtist = ({ artist }) => dispatch => {
    dispatch(handleChangeArtistAction({ artist }));
};

export default {
    searchArtist,
    handleChangeArtist,
    getArtistSongs,
};
