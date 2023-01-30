import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, href, to, target, disabled, ...restProps }) => {
  if (href) {
    return (
      <a
        {...restProps}
        className={classNames(styles.btn, { 'btn--disabled': disabled })}
        onClick={(event) => disabled && event.preventDefault()}
        href={!disabled ? href : ''}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <NavLink
        {...restProps}
        className={classNames(styles.btn, { 'btn--disabled': disabled })}
        to={!disabled ? to : ''}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      {...restProps}
      disabled={disabled}
      className={classNames(styles.btn, { 'btn--disabled': disabled })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

/* button variations:
to => rout links
href => #id scrolls down to selected component, or usual href's for external link starting with "https://..."
onClick/onSubmit =>  will be used as ...restProps within button Return. 
*/
export default Button;
