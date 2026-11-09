export default function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar d-flex flex-column p-3 ${isOpen ? 'active' : ''}`}>
      <h4 className="mb-4 text-center">📦 Admin Gudang</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link active" href="#">📊 Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">📦 Inventaris</a></li>
        <li className="nav-item"><a className="nav-link" href="#">📋 Laporan</a></li>
        <li className="nav-item"><a className="nav-link" href="#">⚙️ Pengaturan</a></li>
      </ul>
    </div>
  );
}