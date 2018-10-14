import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Songs from 'components/Songs/Songs.component';
import actions from 'actions/Songs.actions';
import playerActions from 'actions/Player.actions';

const mapStateToProps = state => ({
    songs: state.artistDetails.songs,
    isSongPlaying: state.artistDetails.isSongPlaying,
    isFormModified: state.searchArtist.isFormModified,
});

const mapDispatchToProps = {
    getAlbumDetails: actions.getAlbumDetails,
    playSong: playerActions.playSong,
};

@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class SongsContainer extends React.PureComponent {
    render() {
        return <Songs {...this.props} />;
    }
}

export default SongsContainer;
