import React from 'react';
import { shallow } from 'enzyme';
import AppToolbar from '../AppToolbar.component';

describe('AppToolbar', () => {
    it('must render', () => {
        shallow(<AppToolbar />);
    });
});
