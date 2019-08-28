import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Board } from "./Components/Board"
import { ReactComponent } from '*.svg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("has empty 3x3 grid as initial state", () => {
  const grid = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
})
