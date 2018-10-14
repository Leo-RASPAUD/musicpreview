import cssConstants from 'constants/css.constants';

const styles = theme => ({
    root: {
        ...cssConstants.overflow.auto,
    },
    listItem: {
        ...cssConstants.display.flex,
        ...cssConstants.alignItems.center,
    },
    listItems: {
        ...cssConstants.display.flex,
        ...cssConstants.justifyContent.spaceBetween,
    },
    buttons: {
        ...cssConstants.display.flex,
        ...cssConstants.alignItems.center,
        ...cssConstants.justifyContent.flexEnd,
    },
    details: {
        ...cssConstants.display.flex,
        ...cssConstants.flexDirection.column,
        ...cssConstants.alignItems.start,
    },
    width100: {
        width: '100%',
    },
    opacity075: {
        opacity: 0.75,
    },
    marginArtwork: {
        marginRight: 2 * theme.spacing.unit,
    },
});

export default styles;
