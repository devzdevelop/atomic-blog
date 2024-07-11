import Home from './Home';
import Devices from './Devices';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />,
        <Route path='app' element={<Devices />} />
        <Route path='logout' element={<Navigate to='/' />} />
        <Route path='*' element={<h1>Page not found:</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
