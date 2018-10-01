import { connect } from 'react-redux'
import * as calculatorActions from '../actions/calculatorActions'
import Calculator from '../components/Calculator'

const mapStateToProps = state => state

const mapDispatchToProps = {
    ...calculatorActions,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)
