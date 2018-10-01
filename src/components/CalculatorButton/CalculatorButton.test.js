import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import sinon from 'sinon'

import CalculatorButton from '.'

test('Display a CalculatorButtonu ', () => {
    const operator = jest.fn()
    const calculatorButton = shallow(
        <CalculatorButton
            backgroundColor="#aaa"
            callback={operator}
            value="Foo"
        />
    )
    expect(shallowToJson(calculatorButton)).toMatchSnapshot()
})

test('CalculatorButton calls props.callback on click', () => {
    const spy = sinon.spy()
    const calculatorButton = shallow(<CalculatorButton callback={spy} />)

    calculatorButton.find('.calculator-button').simulate('click')

    sinon.assert.calledOnce(spy)
})
