import statesConstants from 'constants/states.constants';

const SONG = 'song';

const updateSelectedSong = ({ id: trackId, key }) => song => {
    if (song.trackId === trackId) {
        return { ...song, [key]: true };
    }
    return { ...song, [key]: false };
};

const initialState = {
    loading: true,
    albums: [],
    songs: [],
    selectedAlbum: null,
    isSongPlaying: false,
    songToPlay: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case statesConstants.PLAY_SONG:
            return {
                ...state,
                songToPlay: action.song,
                songs: state.songs.map(
                    updateSelectedSong({ id: action.song.trackId, key: 'isSongBeingPlayed' }),
                ),
                isSongPlaying: true,
            };
        case statesConstants.PAUSE_SONG:
            return {
                ...state,
                isSongPlaying: false,
            };
        case statesConstants.GET_ARTIST_SONGS_LOADING:
            return {
                ...state,
                loading: true,
            };

        case statesConstants.GET_ARTIST_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case statesConstants.GET_ARTIST_SONGS_SUCCESS:
            return {
                ...state,
                songs: action.songs.filter(item => item.kind === SONG),
                loading: false,
            };
        case statesConstants.GET_ALBUM_SONGS_LOADING:
            return {
                ...state,
                loading: true,
            };

        case statesConstants.GET_ALBUM_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
                songs: state.songs.map(song => ({ ...song, selected: false })),
            };
        case statesConstants.GET_ALBUM_SONGS_SUCCESS:
            return {
                ...state,
                selectedAlbum: {
                    album: action.results[0],
                    songs: action.results.slice(1),
                },
                songs: state.songs.map(
                    updateSelectedSong({ id: action.selectedSongTrackId, key: 'selected' }),
                ),
                loading: false,
            };
        default:
            return state;
    }
};

export default appReducer;
