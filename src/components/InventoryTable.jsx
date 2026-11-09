import { useEffect, useRef } from 'react';

export default function InventoryTable({ items, onEdit, onDelete, onAdd }) {
  const tableRef = useRef(null);

  // Efek jQuery: Animasi fade-in pada tabel saat data berubah
  // Dipisahkan di useEffect agar tidak konflik dengan Virtual DOM React
  useEffect(() => {
    $(tableRef.current).hide().fadeIn(500);
  }, [items]);

  // Fungsi helper untuk menentukan warna badge status
  const getStatusBadge = (status) => {
    if (status === 'Aman') return 'bg-success';
    if (status === 'Menipis') return 'bg-warning text-dark';
    return 'bg-danger';
  };

  return (
    <div className="card p-4" ref={tableRef}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Daftar Inventaris Barang</h5>
        <button className="btn btn-primary btn-sm" onClick={onAdd}>+ Tambah Barang</button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>ID Barang</th><th>Nama Barang</th><th>Kategori</th>
              <th>Harga Beli</th><th>Harga Jual</th><th>Stok</th><th>Status</th><th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>Rp {item.hargaBeli.toLocaleString('id-ID')}</td>
                <td>Rp {item.hargaJual.toLocaleString('id-ID')}</td>
                <td>{item.stok}</td>
                <td><span className={`badge ${getStatusBadge(item.status)}`}>{item.status}</span></td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(item)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}