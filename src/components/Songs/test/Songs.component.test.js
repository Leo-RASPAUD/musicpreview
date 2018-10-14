import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Songs.actions';
import playerActions from 'actions/Player.actions';
import Songs from '../Songs.component';

describe('Songs', () => {
    it('must render', () => {
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
