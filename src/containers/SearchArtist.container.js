import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import SearchArtist from 'components/SearchArtist/SearchArtist.component';
import actions from 'actions/SearchArtist.actions';

const mapStateToProps = state => ({
    loading: state.searchArtist.loading,
    artist: state.searchArtist.artist,
    artists: state.searchArtist.artists,
});

const mapDispatchToProps = {
    searchArtist: actions.searchArtist,
    handleChangeArtist: actions.handleChangeArtist,
    getArtistSongs: actions.getArtistSongs,
};

@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class SearchArtistContainer extends React.PureComponent {
    render() {
        return <SearchArtist {...this.props} />;
    }
}

export default SearchArtistContainer;
