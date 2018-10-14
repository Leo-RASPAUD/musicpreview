import React from 'react';
import { shallow } from 'enzyme';
import Songs from '../Songs.container';
import actions from '../../actions/Songs.actions';
import playerActions from '../../actions/Player.actions';

describe('<Song/>', () => {
    it('renders a <Songs/> container', () => {
        const songs = [];
        const isSongPlaying = false;
        const { getAlbumDetails } = actions;
        const { playSong } = playerActions;
        shallow(
            <Songs
                songs={songs}
                isSongPlaying={isSongPlaying}
                getAlbumDetails={getAlbumDetails}
                playSong={playSong}
            />,
        );
    });
});
