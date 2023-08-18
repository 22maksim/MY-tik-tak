import styles from './button.module.css'
import PropTypes from 'prop-types'

const Button = ({ value, setRes }) => {
	return <button onClick={setRes} className={styles.elemButton}>{value}</button>
}

Button.propTypes = {
	value: PropTypes.string,
	setRes: PropTypes.func,
}

export default Button