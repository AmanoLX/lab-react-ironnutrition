import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component {
	state = {
		search: '',
	};

	handleInput = event => {
		let { value, name } = event.target;
		this.setState({
			[name]: value,
		});
		this.props.filteredMeals(this.state.search);
	};

	render() {
		const { search } = this.state;
		return (
			<div>
				<InputGroup className='mb-3'>
					<FormControl
						type='text'
						name='search'
						placeholder='Search for meal...'
						onChange={this.handleInput}
						value={search}
					/>
				</InputGroup>
			</div>
		);
	}
}

export default Search;
