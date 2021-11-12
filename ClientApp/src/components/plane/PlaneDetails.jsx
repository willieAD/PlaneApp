import React, { Component } from 'react'

export class PlaneDetails extends Component {
	static displayName = PlaneDetails.name

	constructor(props) {
		super(props)
		this.state = { plane: [], loading: true }
	}

	componentDidMount() {
		this.populateWeatherData()
	}

	render() {
		let planes = this.state.plane

		return (
			<div>
				<h1>Plane List</h1>
				{planes.map((planes) => (
					<tr key={planes.date}>
						<td>{planes.date}</td>
						<td>{planes.brand}</td>
						<td>{planes.model}</td>
						<td>{planes.type}</td>
					</tr>
				))}
			</div>
		)
	}

	async populateWeatherData() {
		const response = await fetch('Plane')
		const data = await response.json()
		this.setState({ plane: data, loading: false })
	}
}
