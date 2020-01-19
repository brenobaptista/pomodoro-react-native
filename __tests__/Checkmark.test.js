import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Checkmark from '../src/components/Checkmark/Checkmark';

describe('Testing Checkmark Component', () => {
  it('should match to snapshot - True', () => {
    const wrapper = shallow(<Checkmark check={true} />);

    expect(toJson(wrapper)).toMatchSnapshot('True checkmark snapshot');
  });

  it('should match to snapshot - False', () => {
    const wrapper = shallow(<Checkmark check={false} />);
    
    expect(toJson(wrapper)).toMatchSnapshot('False checkmark snapshot');
  });
});
