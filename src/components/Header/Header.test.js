import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Header from '.'

test('Should render a Header', () => {
    const header = shallow(<Header />)

    expect(shallowToJson(header)).toMatchSnapshot()
})
