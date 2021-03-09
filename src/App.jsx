import React, { Component } from 'react';
import './App.scss';
import AddNewMeal from './components/AddNewMeal';
import MealBox from './components/MealBox';
import Search from './components/Search';
import Button from 'react-bootstrap/Button';

import meals from './meals.json';

class App extends Component {
	state = {
		meals,
		active: false,
	};

	toggleForm = () => {
		this.setState({
			active: !this.state.active,
		});
	};

	addNewMeal = meal => {
		this.setState({
			meals: [meal, ...this.state.meals],
			active: !this.state.active,
		});
	};

	filteredMeals = searchMeal => {
		const filteredMeals = this.state.meals.filter(meal =>
			meal.name.toLowerCase().includes(searchMeal.toLowerCase())
		);
		this.setState({ meals: filteredMeals });
	};

	render() {
		return (
			<main>
				<section className='container'>
					<Button
						className='mb-3'
						variant='primary'
						type='submit'
						block
						onClick={this.toggleForm}>
						Add New Meal
					</Button>
					{this.state.active && <AddNewMeal onAddNewMeal={this.addNewMeal} />}

					<Search filteredMeals={this.filteredMeals} />

					{this.state.meals.map(meal => (
						<MealBox
							key={Math.random().toString()}
							// {...meal} possibility but not clear
							name={meal.name}
							calories={meal.calories}
							image={meal.image}
							quantity={meal.quantity}
						/>
					))}
				</section>
			</main>
		);
	}
}

export default App;
