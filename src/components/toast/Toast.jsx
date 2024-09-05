import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Toast.css'; // Import custom CSS file
import { hideToast } from '../../redux/action';

const Toast = () => {
  const dispatch = useDispatch();
  const { visible, message } = useSelector((state) => state.uiReducer.toast);

  useEffect(() => {
    if (visible) {
      toast(message, {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        progressClassName: 'custom-toast-progress',
      });
      dispatch(hideToast());
    }
  }, [visible, message, dispatch]);

  return <ToastContainer position='bottom-right' />;
};

export default Toast;
