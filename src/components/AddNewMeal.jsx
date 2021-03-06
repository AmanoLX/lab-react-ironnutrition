import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddNewMeal extends Component {
	state = {
		active: false,
		name: '',
		calories: '',
		image: '',
	};

	toggleForm = () => {
		this.setState({
			active: !this.state.active,
		});
	};

	render() {
		const { image, name, calories } = this.state;
		return (
			<div>
				<Button
					className='mb-3'
					variant='primary'
					type='submit'
					block
					onClick={this.toggleForm}>
					Add New Meal
				</Button>
				{this.state.active && (
					<Form onSubmit={this.handleSubmission} className='mb-5'>
						{/* Name Input */}
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Name'
								onChange={this.handleNameChange}
								value={name}
							/>
						</Form.Group>
						{/* Calories Input */}
						<Form.Group>
							<Form.Label>Calories</Form.Label>
							<Form.Control
								type='text'
								placeholder='Calories'
								onChange={this.handleCaloriesChange}
								value={calories}
							/>
						</Form.Group>
						{/* Image Input */}
						<Form.Group>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='text'
								placeholder='Image'
								onChange={this.handleImageChange}
								value={image}
							/>
						</Form.Group>
						<Button variant='primary' type='submit' block>
							Submit
						</Button>
					</Form>
				)}
			</div>
		);
	}
}

export default AddNewMeal;
