import React from 'react';
import { shallow } from 'enzyme';
import DesktopContent from '../DesktopContent.component';

describe('DesktopContent', () => {
    it('must render', () => {
        shallow(<DesktopContent />);
    });
});
