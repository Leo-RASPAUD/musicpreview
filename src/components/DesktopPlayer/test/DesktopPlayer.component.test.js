import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Player.actions';
import DesktopPlayer from '../DesktopPlayer.component';

describe('DesktopPlayer', () => {
    it('must render', () => {
        const { pauseSong, playSong } = actions;
        shallow(<DesktopPlayer pauseSong={pauseSong} playSong={playSong} />);
    });
});
