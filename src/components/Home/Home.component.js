import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import SearchArtist from 'containers/SearchArtist.container';
import Songs from 'containers/Songs.container';
import DesktopContent from 'containers/DesktopContent.container';
import MobilePlayer from 'containers/MobilePlayer.container';
import DesktopPlayer from 'containers/DesktopPlayer.container';

import styles from './Home.styles';

@withStyles(styles)
class Home extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={3}>
                    <div className={classes.songs}>
                        <SearchArtist />
                        <Songs />
                        <Hidden smUp>
                            <MobilePlayer />
                        </Hidden>
                    </div>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={9}>
                        <DesktopPlayer />
                        <DesktopContent />
                    </Grid>
                </Hidden>
            </Grid>
        );
    }
}

export default Home;
