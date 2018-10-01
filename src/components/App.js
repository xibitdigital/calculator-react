import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CalculatorContainer from '../containers/CalculatorContainer'

import './App.css'

const App = () => (
    <div className="app">
        <Header />
        <CalculatorContainer />
        <Footer />
    </div>
)

export default App
