import React, { Component } from 'react'
import Btn from './button/Btn'

export class Home extends Component {
	static displayName = Home.name

	render() {
		return (
			<div>
				<h1>Welcome</h1>

				<Btn></Btn>
			</div>
		)
	}
}
