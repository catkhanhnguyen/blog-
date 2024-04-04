import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Toast({ toastMessage, setToastMessage }) {

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div>
      {toastMessage &&
        <span style={{ backgroundColor: 'red', position: 'fixed', bottom: '20px', left: '20px', padding: '10px', borderRadius: '5px', color: 'white' }}>{toastMessage}</span>
      }
    </div>
  );
}

Toast.propTypes = {
  toastMessage: PropTypes.string.isRequired,
  setToastMessage: PropTypes.func.isRequired,
};

export default Toast;
