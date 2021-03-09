import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component {
	state = {
		search: '',
	};

	handleInput = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
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
