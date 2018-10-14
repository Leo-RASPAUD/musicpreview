import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const RenderInput = ({ InputProps, ...other }) => (
    <TextField
        InputProps={{
            ...InputProps,
        }}
        {...other}
    />
);

RenderInput.propTypes = {
    InputProps: PropTypes.object.isRequired,
};

export default RenderInput;
