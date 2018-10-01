import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Footer from '.'

test('should render a Footer', () => {
    const footer = shallow(<Footer />)
    expect(shallowToJson(footer)).toMatchSnapshot()
})
