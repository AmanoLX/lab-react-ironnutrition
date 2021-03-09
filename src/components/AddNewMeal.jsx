import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddNewMeal extends Component {
	state = {
		name: '',
		calories: '',
		image: '',
	};

	handleInput = e => {
		let { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmission = e => {
		e.preventDefault();
		const addNewMeal = this.state;
		this.props.onAddNewMeal(addNewMeal);
		// close and clear the form
		this.setState({
			name: '',
			calories: '',
			image: '',
		});
	};

	render() {
		const { name, calories, image } = this.state;
		return (
			<div>
				<Form onSubmit={this.handleSubmission} className='mb-5'>
					{/* Name Input */}
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='text'
							name='name'
							placeholder='Name'
							onChange={this.handleInput}
							value={name}
						/>
					</Form.Group>
					{/* Calories Input */}
					<Form.Group>
						<Form.Label>Calories</Form.Label>
						<Form.Control
							type='number'
							name='calories'
							placeholder='Calories'
							onChange={this.handleInput}
							value={calories}
						/>
					</Form.Group>
					{/* Image Input */}
					<Form.Group>
						<Form.Label>Image</Form.Label>
						<Form.Control
							type='text'
							name='image'
							placeholder='Image'
							onChange={this.handleInput}
							value={image}
						/>
					</Form.Group>
					<Button variant='primary' type='submit' block>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default AddNewMeal;
