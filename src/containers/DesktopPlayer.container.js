import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import DesktopPlayer from 'components/DesktopPlayer/DesktopPlayer.component';
import playerActions from 'actions/Player.actions';

const mapStateToProps = state => ({
    songToPlay: state.artistDetails.songToPlay,
    selectedAlbum: state.artistDetails.selectedAlbum,
});

const mapDispatchToProps = {
    pauseSong: playerActions.pauseSong,
    playSong: playerActions.playSong,
};

@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class DesktopPlayerContainer extends React.PureComponent {
    render() {
        const { selectedAlbum, songToPlay } = this.props;
        return selectedAlbum || songToPlay ? <DesktopPlayer {...this.props} /> : null;
    }
}

export default DesktopPlayerContainer;
