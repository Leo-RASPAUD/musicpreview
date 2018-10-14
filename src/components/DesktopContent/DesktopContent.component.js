import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';
import { Mood } from '@material-ui/icons';
import styles from './styles';

const DesktopContent = props => {
    const { selectedAlbum, classes } = props;
    return (
        <Fragment>
            {!selectedAlbum && (
                <div className={classes.welcome}>
                    <Mood fontSize="large" color="primary" />
                    <Typography variant="h5">Welcome, start by searching an artist!</Typography>
                </div>
            )}
            {selectedAlbum && (
                <div className={classes.root}>
                    <div className={classes.controls}>
                        <img src={selectedAlbum.album.artworkUrl100} alt="Artwork" />
                    </div>
                    <div className={classes.list}>
                        <Typography variant="h6" className={classes.trackList}>
                            Track list
                        </Typography>
                        <List>
                            {selectedAlbum.songs.map((song, index) => (
                                <ListItem key={song.trackId} className={classes.item}>
                                    {index + 1}. {song.trackName}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

DesktopContent.propTypes = {
    classes: PropTypes.object.isRequired,
    selectedAlbum: PropTypes.object,
};

DesktopContent.defaultProps = {
    selectedAlbum: null,
};

export default withStyles(styles)(DesktopContent);
