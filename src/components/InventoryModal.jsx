import { useState, useEffect } from 'react';

export default function InventoryModal({ item, onSave, onClose }) {
  // State untuk menampung data form input
  const [formData, setFormData] = useState({
    id: '', nama: '', kategori: 'Elektronik', hargaBeli: 0, hargaJual: 0, stok: 0
  });

  // Mengisi form otomatis saat mode Edit
  useEffect(() => {
    if (item) setFormData(item);
  }, [item]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name.includes('harga') || name === 'stok' ? Number(value) : value });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.nama) return alert('ID dan Nama barang wajib diisi!');
    onSave(formData);
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{item ? 'Edit Barang' : 'Tambah Barang Baru'}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">ID Barang</label>
                <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} disabled={!!item} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Nama Barang</label>
                <input type="text" className="form-control" name="nama" value={formData.nama} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Kategori</label>
                <select className="form-select" name="kategori" value={formData.kategori} onChange={handleChange}>
                  <option value="Elektronik">Elektronik</option>
                  <option value="ATK">ATK</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Harga Beli</label>
                  <input type="number" className="form-control" name="hargaBeli" value={formData.hargaBeli} onChange={handleChange} required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Harga Jual</label>
                  <input type="number" className="form-control" name="hargaJual" value={formData.hargaJual} onChange={handleChange} required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Stok</label>
                  <input type="number" className="form-control" name="stok" value={formData.stok} onChange={handleChange} required />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Batal</button>
              <button type="submit" className="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}