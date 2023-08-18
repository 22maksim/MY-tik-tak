import PropType from 'prop-types'
import styles from './ButtonRestart.module.css'

const ButtonRestart = ({ restart }) => {
	return <button className={styles.restart} onClick={restart}>Начать заново</button>
}



ButtonRestart.propType = {
	restart: PropType.func,
}

export default ButtonRestart