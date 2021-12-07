import React from 'react';

const Button = ({ onClick, disabled, children }) => {
	return (
		<button disabled={disabled} className="button" onClick={onClick}>
			{children}
		</button>
	);
};

Button.defaultProps = {
    disabled: false
}

export default Button;
