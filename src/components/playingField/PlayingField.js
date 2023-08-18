import PropTypes from 'prop-types'
import styles from './playingField.module.css'
import Button from '../button/Button'
import calcWinner from '../calculationWinner/calcWinner'

const PlayingField = ({ resultMove, setCurMove }) => {
	if (calcWinner(resultMove)) {
		return
	}

	return (
		<>
			<div>
				<div className={styles.moveRow}>
					<Button value={resultMove[0]} setRes={() => setCurMove(0)} />
					<Button value={resultMove[1]} setRes={() => setCurMove(1)} />
					<Button value={resultMove[2]} setRes={() => setCurMove(2)} />
				</div>
				<div className={styles.moveRow}>
					<Button value={resultMove[3]} setRes={() => setCurMove(3)} />
					<Button value={resultMove[4]} setRes={() => setCurMove(4)} />
					<Button value={resultMove[5]} setRes={() => setCurMove(5)} />
				</div>
				<div className={styles.moveRow}>
					<Button value={resultMove[6]} setRes={() => setCurMove(6)} />
					<Button value={resultMove[7]} setRes={() => setCurMove(7)} />
					<Button value={resultMove[8]} setRes={() => setCurMove(8)} />
				</div>
			</div>
		</>
	)
}

PlayingField.propTypes = {
	resultMove: PropTypes.array,
	setCurtMove: PropTypes.func,
}

export default PlayingField