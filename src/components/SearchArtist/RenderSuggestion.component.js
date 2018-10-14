import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';

const RenderSuggestion = ({ suggestion, index, itemProps, highlightedIndex }) => {
    const isHighlighted = highlightedIndex === index;
    return (
        <MenuItem {...itemProps} selected={isHighlighted} component="div">
            {suggestion.artistName}
        </MenuItem>
    );
};

RenderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    itemProps: PropTypes.object.isRequired,
    suggestion: PropTypes.object.isRequired,
};

export default RenderSuggestion;
