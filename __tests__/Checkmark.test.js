import React from 'react';
import { shallow } from 'enzyme';
import Checkmark from '../src/components/Checkmark/Checkmark';
import toJson from 'enzyme-to-json';

describe('Checkmark', () => {
    describe('Rendering', () => {
        it('should match to snapshot - True', () => {
            const component = shallow(<Checkmark check={true} />)
            expect(toJson(component)).toMatchSnapshot("True checkmark snapshot")
        });
        it('should match to snapshot - False', () => {
            const component = shallow(<Checkmark check={false}/>)
            expect(toJson(component)).toMatchSnapshot("False checkmark snapshot")
        });
    });
});