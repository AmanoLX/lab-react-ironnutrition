import React, { Component } from 'react';
import './App.scss';
import AddNewMeal from './components/AddNewMeal';
import MealBox from './components/MealBox';
import meals from './meals.json';

class App extends Component {
	state = {
		meals,
	};

	render() {
		return (
			<main>
				<section className='container'>
					<AddNewMeal />
					{meals.map(meal => (
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
