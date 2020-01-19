import React from 'react';
import {shallow} from 'enzyme';
import Button from '../src/examples/ButtonExample';
import toJson from 'enzyme-to-json';

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Button label="test label"/>)
            expect(toJson(component)).toMatchSnapshot()
        });
    });
});