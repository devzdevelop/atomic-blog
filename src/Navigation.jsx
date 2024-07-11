import { NavLink } from 'react-router-dom';
export default function Navigation() {
  const Link = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <nav
      style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'space-between',
        textDecoration: 'none',
      }}
    >
      <div>
        <h3>Devices</h3>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink style={Link} to='/'>
          Home
        </NavLink>
        <NavLink style={Link} to='/app'>
          App
        </NavLink>
      </div>
      <div>
        <NavLink style={Link} to='/logout'>
          Logout
        </NavLink>
      </div>
    </nav>
  );
}
