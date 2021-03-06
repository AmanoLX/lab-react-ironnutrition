import React, { Component } from 'react';
import './App.scss';
import MealBox from './components/MealBox';
import meals from './meals.json';

class App extends Component {
	state = {
		meals,
		name: '',
		calories: '',
		image: '',
		quantity: '',
		key: Math.random().toString(),
	};

	render() {
		// const { name, calories, image, quantity } = this.state.meal;
		return (
			<main>
				<section>
					{meals.map(meal => (
						<MealBox
							key={meal.key}
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
