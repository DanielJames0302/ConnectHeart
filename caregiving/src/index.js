import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

);

