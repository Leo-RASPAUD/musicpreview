import cssConstants from 'constants/css.constants';

const styles = theme => ({
    root: {
        ...cssConstants.display.flex,
        ...cssConstants.flexDirection.column,
        marginTop: theme.spacing.unit,
    },
    welcome: {
        ...cssConstants.display.flex,
        ...cssConstants.flexDirection.column,
        ...cssConstants.alignItems.center,
    },
    controls: {
        ...cssConstants.display.flex,
        ...cssConstants.flexDirection.column,
        ...cssConstants.alignItems.center,
        flexShrink: 0,
    },
    list: {
        ...cssConstants.overflow.auto,
        padding: `0 ${4 * theme.spacing.unit}px`,
    },
    item: {
        borderBottom: '1px solid rgba(158, 158, 158, 0.5)',
    },
    trackList: {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        borderTop: `1px solid ${theme.palette.primary.main}`,
        marginTop: 2 * theme.spacing.unit,
    },
});

export default styles;
