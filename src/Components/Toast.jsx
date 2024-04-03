import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Toast({ message }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timer;

    if (message) {
      setShowToast(true);
      timer = setTimeout(() => {
        setShowToast(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <div>
      {showToast &&
        <span style={{ backgroundColor: 'red', position: 'fixed', bottom: '20px', left: '20px', padding: '10px', borderRadius: '5px', color: 'white' }}>{message}</span>
      }
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Toast;
