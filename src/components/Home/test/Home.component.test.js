import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home.component';

describe('Home', () => {
    it('must render', () => {
        shallow(<Home />);
    });
});
