import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.component';

describe('App', () => {
    it('must render', () => {
        shallow(<App />);
    });
});
