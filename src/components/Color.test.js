import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name="dark orchid" hex="#9932CC" rgb={{ red: 153, green: 50, blue: 204 }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
