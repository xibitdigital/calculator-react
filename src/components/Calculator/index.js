import React, { Component } from 'react'
import * as R from 'ramda'

import Display from '../Display'
import CalculatorButton from '../CalculatorButton'

import './Calculator.css'

export default class Calculator extends Component {
    render() {
        const {
            calculator,
            enterNumber,
            setOperator,
            percentage,
            clear,
            evaluate,
            toggleNegative,
        } = this.props

        const numbersKeyPad = R.map(x => (
            <CalculatorButton
                backgroundColor="#d6d6d6"
                callback={() => enterNumber(x)}
                key={x}
                value={x}
                wide={x === 0}
            />
        ))

        const numberButtons = numbersKeyPad([7, 8, 9, 4, 5, 6, 1, 2, 3, 0])

        return (
            <main className="calculator">
                <Display value={calculator.currentValue} />
                <div className="calculator__buttons-wrapper">
                    <section className="calculator__left-buttons">
                        <CalculatorButton
                            backgroundColor="#d6d6d6"
                            callback={clear}
                            value="AC"
                        />
                        <CalculatorButton
                            backgroundColor="#d6d6d6"
                            callback={toggleNegative}
                            value="+/-"
                        />
                        <CalculatorButton
                            backgroundColor="#d6d6d6"
                            callback={percentage}
                            value="%"
                        />
                        {numberButtons}
                        <CalculatorButton
                            backgroundColor="#d6d6d6"
                            callback={() => enterNumber('.')}
                            value="."
                        />
                    </section>
                    <section className="calculator__operator-buttons">
                        <CalculatorButton
                            backgroundColor="#1795d4"
                            callback={() => setOperator(R.divide)}
                            color="#ffffff"
                            value="÷"
                        />
                        <CalculatorButton
                            backgroundColor="#1795d4"
                            callback={() => setOperator(R.multiply)}
                            color="#ffffff"
                            value="×"
                        />
                        <CalculatorButton
                            backgroundColor="#1795d4"
                            callback={() => setOperator(R.subtract)}
                            color="#ffffff"
                            value="-"
                        />
                        <CalculatorButton
                            backgroundColor="#1795d4"
                            callback={() => setOperator(R.add)}
                            color="#ffffff"
                            value="+"
                        />
                        <CalculatorButton
                            backgroundColor="#1795d4"
                            callback={evaluate}
                            color="#ffffff"
                            value="="
                        />
                    </section>
                </div>
            </main>
        )
    }
}
