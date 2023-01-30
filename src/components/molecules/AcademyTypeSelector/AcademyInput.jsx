import PropTypes from 'prop-types';
import styles from './AcademyInput.module.scss';

const AcademyInput = (props) => {
  const { handleChange, handleClick, name, className, id, htmlFor } = props;

  return (
    <>
      <input
        id={id}
        onClick={handleClick}
        type="radio"
        onChange={handleChange}
        value={name}
        className={styles['slider-button']}
        name="academies"
      />
      <label htmlFor={htmlFor} className={className}>
        {name}
      </label>
    </>
  );
};

AcademyInput.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  handleChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default AcademyInput;
