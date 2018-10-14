import React from 'react';
import { shallow } from 'enzyme';
import DesktopContent from '../DesktopContent.container';

describe('<DesktopContent/>', () => {
    it('renders a <DesktopContent/> container', () => {
        const selectedAlbum = {};
        shallow(<DesktopContent selectedAlbum={selectedAlbum} />);
    });
});
