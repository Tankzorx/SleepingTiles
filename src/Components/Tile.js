import React, { Component } from 'react';




export class ActivatedTile extends Component {	

	render() {
		console.log(this.props.depth)

		const activatedSquare = 
			<div >
				<table className="activatedSquare">
					<tbody>
						<tr>
							<td><SleeperTile depth={this.props.depth} /></td>
							<td><SleeperTile depth={this.props.depth} /></td>
							<td><SleeperTile depth={this.props.depth} /></td>
						</tr>
						<tr>
							<td><SleeperTile depth={this.props.depth} /></td>
							<td>Sleeping: {this.props.depth} </td>
							<td><SleeperTile depth={this.props.depth} /></td>
						</tr>
						<tr>
							<td><SleeperTile depth={this.props.depth} /></td>
							<td><SleeperTile depth={this.props.depth} /></td>
							<td><SleeperTile depth={this.props.depth} /></td>
						</tr>
					</tbody>
				</table>
			</div>

		return activatedSquare;
	}
}

export class SleeperTile extends Component {
	
	constructor() {
		super();
		this.handleExpand = this.handleExpand.bind(this);
		this.state = {sleeping: true};
	}

	handleExpand(e) {
		e.preventDefault();
		// Stop sleeping.
		this.setState({sleeping: false})
	}

	render() {
		const sleeperSquare = 
			<div>
				<button onClick={this.handleExpand}>
					Awaken
				</button>
			</div>

		const activatedTile = <ActivatedTile depth={1 + parseInt(this.props.depth)}/>

		if (this.state.sleeping) {
			return sleeperSquare;
		} else {
			return activatedTile;
		}
	}	
}