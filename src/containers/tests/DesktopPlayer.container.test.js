import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Player.actions';
import DesktopPlayer from '../DesktopPlayer.container';

describe('<DesktopPlayer/>', () => {
    it('renders a <DesktopPlayer/> container', () => {
        const { pauseSong, playSong } = actions;
        const songToPlay = null;
        const selectedAlbum = {};
        shallow(
            <DesktopPlayer
                selectedAlbum={selectedAlbum}
                songToPlay={songToPlay}
                pauseSong={pauseSong}
                playSong={playSong}
            />,
        );
    });
});
