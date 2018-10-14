import statesConstants from 'constants/states.constants';
import itunesService from 'services/itunes.service';

const getAlbumSongsLoadingAction = () => ({ type: statesConstants.GET_ALBUM_SONGS_LOADING });
const getAlbumSongsFailureAction = ({ error }) => ({
    type: statesConstants.GET_ALBUM_SONGS_FAILURE,
    error,
});
const getAlbumSongsSuccessAction = ({ results, selectedSongTrackId }) => ({
    type: statesConstants.GET_ALBUM_SONGS_SUCCESS,
    results,
    selectedSongTrackId,
});

const getAlbumDetails = ({ song }) => async dispatch => {
    dispatch(getAlbumSongsLoadingAction());
    try {
        const result = await itunesService.searchSongsById({ id: song.collectionId });
        dispatch(
            getAlbumSongsSuccessAction({
                results: result.data.results,
                selectedSongTrackId: song.trackId,
            }),
        );
    } catch (error) {
        dispatch(
            getAlbumSongsFailureAction({
                error: 'Could not get the album details, try again later',
            }),
        );
    }
};

export default {
    getAlbumDetails,
};
