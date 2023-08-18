import { useState } from 'react';
import PlayingField from './components/playingField/PlayingField';
import calcWinner from './components/calculationWinner/calcWinner';
import ButtonRestart from './components/buttonRestart/ButtonRestart';

function App() {
	const [resultMove, setResultMove] = useState(Array(9).fill(null));
	const [totalMove, setTotalMove] = useState(0);
	const current = totalMove % 2 === 0 ? 'X' : 'O';
	const playyerWinner = totalMove % 2 ? 'X' : 'O'
	const showText = calcWinner(resultMove) ? `Победил игрок: ${playyerWinner}` : `Следующий ход ${current}`


	const restart = () => {
		setResultMove(Array(9).fill(null))
		setTotalMove(0)
	}
	const buttonRestart = calcWinner(resultMove) ? (<ButtonRestart restart={restart} />) : undefined;

	const setCurMove = (data) => {
		let result = [...resultMove]
		result[data] = current
		setResultMove(result)
		setTotalMove(totalMove + 1)
	}

	return (
		<>
			<div className='showGame' >
				<h3>{showText}</h3>
				<div>{buttonRestart}</div>
				<div className='showField' >
					<PlayingField resultMove={resultMove} setCurMove={setCurMove} />
				</div>
			</div>
		</>
	);
}

export default App;
