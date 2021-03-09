import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class MealBox extends Component {
	render() {
		const { image, name, calories, quantity } = this.props;
		return (
			<Media style={{ justifyContent: 'space-between' }}>
				<img
					src={image}
					alt='item'
					className='img-thumbnail mr-3 mw-25 border-0 col-3'
					style={{ maxWidth: '10em' }}
				/>
				<div className='media-body align-self-center col-6'>
					<h5 className='mt-0 mb-1'>{name}</h5>
					<small>{calories}</small>
				</div>
				<form className='row align-self-center col-3'>
					<input
						className='form-control col-9'
						type='number'
						value={quantity}
					/>
					<button className='btn btn-primary col-3'>+</button>
				</form>
			</Media>
		);
	}
}

export default MealBox;
