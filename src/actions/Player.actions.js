import statesConstants from 'constants/states.constants';

const pauseSong = () => dispatch => dispatch({ type: statesConstants.PAUSE_SONG });
const playSong = ({ song }) => dispatch => dispatch({ type: statesConstants.PLAY_SONG, song });

export default {
    pauseSong,
    playSong,
};
