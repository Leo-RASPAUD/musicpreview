import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography, IconButton, Grid } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import styles from './styles';

const Songs = props => {
    const { songs, classes, getAlbumDetails, isSongPlaying, playSong, isFormModified } = props;
    return (
        <Fragment>
            {isFormModified &&
                songs.length === 0 && (
                    <Typography style={{ margin: '24px 0' }}>
                        We could not find any songs in our database.
                    </Typography>
                )}
            <List className={classes.root}>
                {songs.map(song => (
                    <ListItem
                        button
                        onClick={() => getAlbumDetails({ song })}
                        selected={song.selected}
                        className={classes.listItems}
                        classes={{
                            container: classes.width100,
                        }}
                        key={song.trackId}
                    >
                        <Grid container spacing={0}>
                            <Grid item className={classes.listItem} lg={8} md={12} sm={12}>
                                <Grid container spacing={0} style={{ justifyContent: 'center' }}>
                                    <Grid item className={classes.listItem} md={4} sm={12}>
                                        <img
                                            src={song.artworkUrl60}
                                            alt="Artwork"
                                            className={classes.marginArtwork}
                                        />
                                    </Grid>
                                    <Grid item className={classes.listItem} md={12} sm={12}>
                                        <div className={classes.details}>
                                            <Typography variant="subtitle1">
                                                {song.trackName}
                                            </Typography>
                                            <Typography className={classes.opacity075}>
                                                {song.artistName}
                                            </Typography>
                                            <Typography className={classes.opacity075}>
                                                {song.collectionName}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                className={classes.buttons}
                                lg={4}
                                md={12}
                                sm={12}
                                style={{ justifyContent: 'center' }}
                            >
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
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </Fragment>
    );
};

Songs.propTypes = {
    classes: PropTypes.object.isRequired,
    songs: PropTypes.array.isRequired,
    isSongPlaying: PropTypes.bool.isRequired,
    isFormModified: PropTypes.bool.isRequired,
    getAlbumDetails: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
};

export default withStyles(styles)(Songs);
