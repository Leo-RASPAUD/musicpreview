import cssConstants from 'constants/css.constants';

export default theme => ({
    root: {
        ...cssConstants.justifyContent.center,
        ...cssConstants.display.flex,
        ...cssConstants.alignItems.center,
        ...cssConstants.flexDirection.column,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        margin: `0 ${4 * theme.spacing.unit}px`,
        paddingBottom: 2 * theme.spacing.unit,
    },
    icon: {
        ...cssConstants.display.flex,
        ...cssConstants.alignItems.center,
    },
});
