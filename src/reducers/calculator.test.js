import calculator from './calculator'
import * as Types from '../constants'

test('should set a number', () => {
    expect(
        calculator(
            {
                currentValue: '0',
                operator: null,
                previousValue: 0,
            },
            {
                type: Types.ENTER_NUMBER,
                number: '2',
            }
        )
    ).toEqual({
        currentValue: '2',
        operator: null,
        previousValue: 0,
    })
})

test('should set an operator', () => {
    const operator = jest.fn()

    expect(
        calculator(
            {
                currentValue: '0',
                operator: null,
                previousValue: 0,
            },
            {
                type: Types.SET_OPERATOR,
                operator: operator,
            }
        )
    ).toEqual({
        currentValue: '0',
        operator: operator,
        previousValue: 0,
    })
})

test('should calculate a percentage', () => {
    expect(
        calculator(
            {
                currentValue: '10',
                operator: null,
                previousValue: 0,
            },
            {
                type: Types.PERCENTAGE,
            }
        )
    ).toEqual({
        currentValue: '0.1',
        operator: null,
        previousValue: 0,
    })
})

test('should restore the initial state', () => {
    const operator = jest.fn()

    expect(
        calculator(
            {
                currentValue: '4',
                operator: operator,
                previousValue: 5,
            },
            {
                type: Types.CLEAR,
            }
        )
    ).toEqual({
        currentValue: '0',
        operator: null,
        previousValue: 0,
    })
})

test('should evaluate an operation', () => {
    const add = (a, b) => a + b

    expect(
        calculator(
            {
                currentValue: '4',
                operator: add,
                previousValue: 5,
            },
            {
                type: Types.EVALUATE,
            }
        )
    ).toEqual({
        currentValue: '9',
        operator: null,
        previousValue: 0,
    })
})

test('should toggle sign', () => {
    expect(
        calculator(
            {
                currentValue: '-4',
                operator: null,
                previousValue: 0,
            },
            {
                type: Types.TOGGLE_NEGATIVE,
            }
        )
    ).toEqual({
        currentValue: '4',
        operator: null,
        previousValue: 0,
    })
})
