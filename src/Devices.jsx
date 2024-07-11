import { useReducer } from 'react';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const initialState = {
  light: 'off',
  fan: 'off',
};

function reducer(state, action) {
  switch (action.type) {
    case 'toggleLight':
      return {
        ...state,
        light: state.light === 'on' ? 'off' : 'on',
      };
    case 'toggleFan':
      return {
        ...state,
        fan: state.fan === 'on' ? 'off' : 'on',
      };
    default:
      return 'Unknown error';
  }
}

export default function Devices() {
  const navigate = useNavigate();
  const [{ light, fan }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅️</button>
      <Navigation />
      <div style={{ display: 'flex', gap: '5rem' }}>
        <div>
          <h3>Light: {light}</h3>
          <button onClick={() => dispatch({ type: 'toggleLight' })}>
            Toggle Light Switch
          </button>
        </div>
        <div>
          <h3>Fan: {fan}</h3>
          <button onClick={() => dispatch({ type: 'toggleFan' })}>
            Toggle Fan Switch
          </button>
        </div>
      </div>
    </div>
  );
}
