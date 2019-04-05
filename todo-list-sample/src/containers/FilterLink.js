import { connect } from 'react-redux'
import {setVisibilityFilter} from "../actions";
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDsipatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDsipatchToProps
)(Link)