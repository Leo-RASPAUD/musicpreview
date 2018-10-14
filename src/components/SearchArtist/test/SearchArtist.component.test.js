import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/SearchArtist.actions';
import SearchArtist from '../SearchArtist.component';

describe('SearchArtist', () => {
    it('must render', () => {
        const selectedAlbum = {};
        const { searchArtist, handleChangeArtist, getArtistSongs } = actions;
        const loading = false;
        const artist = { artistName: '' };
        const artists = [];
        shallow(
            <SearchArtist
                searchArtist={searchArtist}
                selectedAlbum={selectedAlbum}
                handleChangeArtist={handleChangeArtist}
                loading={loading}
                artist={artist}
                artists={artists}
                getArtistSongs={getArtistSongs}
            />,
        );
    });
});
