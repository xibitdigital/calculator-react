import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Display from '.'

test('Should render Display with value 10', () => {
    const display = shallow(<Display value={10} />)
    expect(shallowToJson(display)).toMatchSnapshot()
})
