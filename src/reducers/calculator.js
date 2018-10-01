import * as Types from '../constants'

const initialState = {
    currentValue: '0',
    operator: null,
    previousValue: 0,
}

const calculate = (previousValue, currentValue, operatorFn) =>
    operatorFn(previousValue, currentValue)

export default function calculator(state = initialState, action) {
    switch (action.type) {
        case Types.ENTER_NUMBER:
            return Object.assign({}, state, {
                currentValue:
                    state.currentValue === '0'
                        ? action.number.toString()
                        : state.currentValue + action.number.toString(),
            })
        case Types.SET_OPERATOR:
            return {
                currentValue: '0',
                operator: action.operator,
                previousValue: state.operator
                    ? calculate(
                          parseFloat(state.currentValue),
                          state.previousValue,
                          state.operator
                      )
                    : parseFloat(state.currentValue),
            }
        case Types.PERCENTAGE:
            return Object.assign({}, state, {
                currentValue: (parseFloat(state.currentValue) / 100).toString(),
            })
        case Types.CLEAR:
            return {
                currentValue: '0',
                operator: null,
                previousValue: 0,
            }
        case Types.EVALUATE:
            return {
                currentValue: calculate(
                    parseFloat(state.currentValue),
                    state.previousValue,
                    state.operator
                ).toString(),
                operator: null,
                previousValue: 0,
            }
        case Types.TOGGLE_NEGATIVE:
            return Object.assign({}, state, {
                currentValue: (-parseFloat(state.currentValue)).toString(),
            })
        default:
            return state
    }
}
