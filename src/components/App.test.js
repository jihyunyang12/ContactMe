import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './LoginForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});
