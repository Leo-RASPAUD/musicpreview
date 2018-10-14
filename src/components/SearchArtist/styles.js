import cssConstants from 'constants/css.constants';

const styles = theme => ({
    autoCompleteContainer: {
        flexGrow: 1,
        ...cssConstants.position.relative,
    },
    autoCompletePaper: {
        ...cssConstants.position.absolute,
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    artistTextField: {
        flex: 1,
        padding: 2 * theme.spacing.unit,
        margin: theme.spacing.unit,
        borderRadius: 0.5 * theme.spacing.unit,
        border: 'none',
        outline: 'none',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default styles;
