import Card from './components/card/Card';
import CardsContainer from './components/cards-container/CardsContainer';

const App = () => {
	return (
		<>
			{/*
			----EJEMPLO CON CHILDREN----
			<Card>
				<Icon />
				<Title />
				<Text />
			</Card>
			----EJEMPLO CON CHILDREN----
			Se haría demasiado largo, por lo tanto hacemos la opción de abajo
			*/}

			<CardsContainer>
				<Card icon='/images/icon-sedans.svg' title='SEDANS' bgColor='orange' />
				<Card icon='/images/icon-suvs.svg' title='SUVS' bgColor='blue' />
				<Card icon='/images/icon-luxury.svg' title='LUXURY' bgColor='green' />
			</CardsContainer>
		</>
	);
};

export default App;
