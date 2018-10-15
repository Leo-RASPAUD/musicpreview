import React from 'react';
import { shallow } from 'enzyme';
import actions from 'actions/Songs.actions';
import playerActions from 'actions/Player.actions';
import { Typography, List, ListItem, IconButton } from '@material-ui/core';
import { expect } from 'chai';
import Songs from '../Songs.component';

describe('Songs', () => {
    it('must render typograhy when empty songs', () => {
        const songs = [];
        const isSongPlaying = false;
        const isFormModified = true;
        const { getAlbumDetails } = actions;
        const { playSong } = playerActions;
        const wrapper = shallow(
            <Songs
                songs={songs}
                isFormModified={isFormModified}
                isSongPlaying={isSongPlaying}
                getAlbumDetails={getAlbumDetails}
                playSong={playSong}
            />,
        );
        expect(wrapper.props().isFormModified).to.equal(true);
        expect(wrapper.dive().find(Typography)).to.have.length(1);
    });
    it('must render an empty list when 0 songs', () => {
        const songs = [];
        const isSongPlaying = false;
        const isFormModified = false;
        const { getAlbumDetails } = actions;
        const { playSong } = playerActions;
        const wrapper = shallow(
            <Songs
                songs={songs}
                isFormModified={isFormModified}
                isSongPlaying={isSongPlaying}
                getAlbumDetails={getAlbumDetails}
                playSong={playSong}
            />,
        );
        expect(wrapper.dive().find(List)).to.have.length(1);
        expect(wrapper.dive().find(ListItem)).to.have.length(0);
    });
    it('must render a list when 1 song', () => {
        const songs = [
            {
                selected: true,
                trackId: 1,
                artworkUrl60: 'src1',
                trackName: 'track1',
                artistName: 'artist1',
                collectionName: 'collection1',
            },
        ];
        const isSongPlaying = false;
        const isFormModified = false;
        const { getAlbumDetails } = actions;
        const { playSong } = playerActions;
        const wrapper = shallow(
            <Songs
                songs={songs}
                isFormModified={isFormModified}
                isSongPlaying={isSongPlaying}
                getAlbumDetails={getAlbumDetails}
                playSong={playSong}
            />,
        );
        expect(wrapper.dive().find(List)).to.have.length(1);
        expect(wrapper.dive().find(ListItem)).to.have.length(1);
        expect(wrapper.dive().find('img')).to.have.length(1);
    });

    it('Page structure when there are 2 songs: 1 list, 2 listItems, 2 images, 6 typography, 2 icons buttons', () => {
        const songs = [
            {
                selected: true,
                trackId: 1,
                artworkUrl60: 'src1',
                trackName: 'track1',
                artistName: 'artist1',
                collectionName: 'collection1',
            },
            {
                selected: true,
                trackId: 2,
                artworkUrl60: '',
                trackName: 'track2',
                artistName: 'artist2',
                collectionName: 'collection2',
            },
        ];
        const isSongPlaying = false;
        const isFormModified = false;
        const { getAlbumDetails } = actions;
        const { playSong } = playerActions;
        const wrapper = shallow(
            <Songs
                songs={songs}
                isFormModified={isFormModified}
                isSongPlaying={isSongPlaying}
                getAlbumDetails={getAlbumDetails}
                playSong={playSong}
            />,
        );
        expect(wrapper.dive().find(List)).to.have.length(1);
        expect(wrapper.dive().find(ListItem)).to.have.length(2);
        expect(wrapper.dive().find('img')).to.have.length(2);
        expect(wrapper.dive().find(Typography)).to.have.length(6);
        expect(wrapper.dive().find(IconButton)).to.have.length(2);
    });
});
