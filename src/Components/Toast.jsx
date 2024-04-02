import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Toast({ message }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={`toast ${showToast ? 'show' : ''}`}>
      <span>{message}</span>
    </div>
  );
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Toast;
