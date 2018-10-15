import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { MusicNote } from '@material-ui/icons';
import ReactAudioPlayer from 'react-audio-player';
import styles from './styles';

const DesktopPlayer = props => {
    const { playSong, songToPlay, pauseSong, classes } = props;
    return (
        <div className={classes.root}>
            {songToPlay && (
                <div className={classes.icon}>
                    <MusicNote />
                    <Typography variant="h6">{songToPlay.trackName}</Typography>
                </div>
            )}
            <ReactAudioPlayer
                src={songToPlay ? songToPlay.previewUrl : null}
                controls
                onPause={pauseSong}
                onEnded={pauseSong}
                onPlay={() => playSong({ song: songToPlay })}
                autoPlay
            />
        </div>
    );
};

DesktopPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
    pauseSong: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
    songToPlay: PropTypes.object,
};

DesktopPlayer.defaultProps = {
    songToPlay: null,
};

export default withStyles(styles)(DesktopPlayer);
