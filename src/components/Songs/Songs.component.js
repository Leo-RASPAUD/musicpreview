import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import styles from './styles';

const Songs = props => {
    const { songs, classes, getAlbumDetails, isSongPlaying, playSong } = props;
    return (
        <List className={classes.root}>
            {songs.map(song => (
                <div className={classes.wrapper} key={song.trackId}>
                    <ListItem
                        button
                        onClick={() => getAlbumDetails({ song })}
                        selected={song.selected}
                        className={classes.listItems}
                        classes={{
                            container: classes.width100,
                        }}
                    >
                        <div className={classes.listItem}>
                            <img
                                src={song.artworkUrl60}
                                alt="Artwork"
                                className={classes.marginArtwork}
                            />
                            <div className={classes.details}>
                                <Typography variant="subtitle1">{song.trackName}</Typography>
                                <Typography className={classes.opacity075}>
                                    {song.artistName}
                                </Typography>
                                <Typography className={classes.opacity075}>
                                    {song.collectionName}
                                </Typography>
                            </div>
                        </div>
                        <ListItemSecondaryAction className={classes.buttons}>
                            {isSongPlaying &&
                                song.isSongBeingPlayed && (
                                    <div className="lds-bar-chart">
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                )}
                            <IconButton color="primary">
                                <PlayArrow onClick={() => playSong({ song })} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
            ))}
        </List>
    );
};

Songs.propTypes = {
    classes: PropTypes.object.isRequired,
    songs: PropTypes.array.isRequired,
    isSongPlaying: PropTypes.bool.isRequired,
    getAlbumDetails: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
};

export default withStyles(styles)(Songs);
