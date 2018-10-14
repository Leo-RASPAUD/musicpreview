import React from 'react';
import { shallow } from 'enzyme';
import Router from '../Router.component';

describe('Router', () => {
    it('must render', () => {
        shallow(<Router />);
    });
});
