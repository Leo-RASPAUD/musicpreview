import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import MobilePlayer from 'components/MobilePlayer/MobilePlayer.component';
import playerActions from 'actions/Player.actions';

const mapStateToProps = state => ({
    songToPlay: state.artistDetails.songToPlay,
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
class MobilePlayerContainer extends React.PureComponent {
    render() {
        return <MobilePlayer {...this.props} />;
    }
}

export default MobilePlayerContainer;
