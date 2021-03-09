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
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmission = e => {
		e.preventDefault();
		const addNewMeal = this.state;
		if (addNewMeal.calories && addNewMeal.name && addNewMeal.image) {
			this.props.onAddNewMeal(addNewMeal);
			this.setState({
				name: '',
				calories: '',
				image: '',
			});
		}
	};

	render() {
		const { name, calories, image } = this.state;
		return (
			<div>
				<Form onSubmit={this.handleSubmission} className='mb-3'>
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
					<Button variant='outline-primary' type='submit' block>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default AddNewMeal;
