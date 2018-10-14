import cssConstants from 'constants/css.constants';

export default () => ({
    root: {
        padding: '2vh 2vw',
        height: '100%',
    },
    songs: {
        ...cssConstants.display.flex,
        ...cssConstants.flexDirection.column,
        height: '100%',
    },
});
