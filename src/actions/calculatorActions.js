import * as Types from '../constants'

export const clear = () => ({ type: Types.CLEAR })

export const enterNumber = number => ({ number, type: Types.ENTER_NUMBER })

export const evaluate = () => ({ type: Types.EVALUATE })

export const percentage = () => ({ type: Types.PERCENTAGE })

export const setOperator = operator => ({ operator, type: Types.SET_OPERATOR })

export const toggleNegative = () => ({ type: Types.TOGGLE_NEGATIVE })
