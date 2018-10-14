import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import DesktopContent from 'components/DesktopContent/DesktopContent.component';

const mapStateToProps = state => ({
    selectedAlbum: state.artistDetails.selectedAlbum,
});

const mapDispatchToProps = {};

@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
class DesktopContentContainer extends React.PureComponent {
    render() {
        return <DesktopContent {...this.props} />;
    }
}

export default DesktopContentContainer;
