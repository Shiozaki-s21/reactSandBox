import React from 'react'
import FiliterLink  from '../containers/FilterLink'
import {VisibilityFilters} from "../actions";

const Footer = () => (
	<div>
		<span>Show:</span>
		<FiliterLink filter = {VisibilityFilters.SHOW_ALL}>
			All
		</FiliterLink>

		<FiliterLink filter = {VisibilityFilters.SHOW_ACTIVE}>
			Active
		</FiliterLink>

		<FiliterLink filter = {VisibilityFilters.SHOW_COMPLETED}>
			Completed
		</FiliterLink>
	</div>
)

export default Footer