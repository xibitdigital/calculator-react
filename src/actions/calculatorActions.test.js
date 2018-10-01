import * as calculatorActions from './calculatorActions'

test('should trigger a clear action', () => {
    expect(calculatorActions.clear()).toMatchSnapshot()
})

test('should trigger an enterNumber action', () => {
    expect(calculatorActions.enterNumber(10)).toMatchSnapshot()
})

test('should trigger an evaluate action', () => {
    expect(calculatorActions.evaluate()).toMatchSnapshot()
})

test('should trigger a percentage action', () => {
    expect(calculatorActions.percentage()).toMatchSnapshot()
})

test('should trigger a setOperator action', () => {
    const fn = jest.fn()
    expect(calculatorActions.setOperator(fn)).toMatchSnapshot()
})

test('should trigger a toggleNegative action', () => {
    expect(calculatorActions.toggleNegative()).toMatchSnapshot()
})
