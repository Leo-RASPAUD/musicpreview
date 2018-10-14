import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ReactAudioPlayer from 'react-audio-player';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core';
import { Audiotrack, ExpandMore } from '@material-ui/icons';
import styles from './styles';

const MobilePlayer = props => {
    const { songToPlay, classes, playSong, pauseSong } = props;
    return !songToPlay ? null : (
        <ExpansionPanel defaultExpanded className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <div className={classes.iconWrapper}>
                    <Audiotrack style={{ marginRight: 16 }} />
                    <Typography>Playback controls</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ReactAudioPlayer
                    src={songToPlay.previewUrl}
                    autoPlay
                    controls
                    onPause={pauseSong}
                    onEnded={pauseSong}
                    onPlay={() => playSong({ song: songToPlay })}
                    style={{ width: '100%' }}
                />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

MobilePlayer.propTypes = {
    classes: PropTypes.object.isRequired,
    pauseSong: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
    songToPlay: PropTypes.object,
};

MobilePlayer.defaultProps = {
    songToPlay: null,
};

export default withStyles(styles)(MobilePlayer);
