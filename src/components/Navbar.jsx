export default function Navbar({ onToggle }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-3">
      <div className="container-fluid">
        <button className="btn btn-primary d-md-none me-2" onClick={onToggle}>☰</button>
        <span className="navbar-brand mb-0 h1">Dashboard Inventaris Gudang</span>
        <div className="d-flex align-items-center">
          <span className="me-2 d-none d-md-inline">Halo, Hafidz!</span>
          <img src="https://ui-avatars.com/api/?name=Hafidz&background=2c3e50&color=fff" className="rounded-circle" width="35" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}