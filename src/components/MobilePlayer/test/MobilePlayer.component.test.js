import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Player.actions';
import MobilePlayer from '../MobilePlayer.component';

describe('MobilePlayer', () => {
    it('must render', () => {
        const { pauseSong, playSong } = actions;
        shallow(<MobilePlayer pauseSong={pauseSong} playSong={playSong} />);
    });
});
