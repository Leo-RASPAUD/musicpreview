import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Player.actions';
import MobilePlayer from '../MobilePlayer.container';

describe('<MobilePlayer/>', () => {
    it('renders a <MobilePlayer/> container', () => {
        const selectedAlbum = {};
        const { pauseSong, playSong } = actions;
        const songToPlay = null;
        shallow(
            <MobilePlayer
                selectedAlbum={selectedAlbum}
                songToPlay={songToPlay}
                pauseSong={pauseSong}
                playSong={playSong}
            />,
        );
    });
});
