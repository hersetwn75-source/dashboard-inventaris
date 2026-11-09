i// Dashboard Manajemen Inventaris Barang Gudang
// Nama: Mochamad Hafidz Azzakiy
// NIM: 2511501031
// Studi Kasus: 1

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import InventoryTable from './components/InventoryTable';
import InventoryModal from './components/InventoryModal';

function App() {
  // State untuk menampung data barang (Array of Objects)
  const [items, setItems] = useState([
    { id: 'BRG001', nama: 'Laptop ASUS', kategori: 'Elektronik', hargaBeli: 7000000, hargaJual: 8500000, stok: 15, status: 'Aman' },
    { id: 'BRG002', nama: 'Kertas A4', kategori: 'ATK', hargaBeli: 40000, hargaJual: 55000, stok: 5, status: 'Menipis' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fungsi untuk menyimpan data (Create & Update)
  const handleSave = (item) => {
    // Logika otomatis penentuan status stok
    const status = item.stok === 0 ? 'Habis' : item.stok <= 10 ? 'Menipis' : 'Aman';
    const updatedItem = { ...item, status };

    if (currentItem) {
      // Update data yang sudah ada
      setItems(items.map(i => i.id === updatedItem.id ? updatedItem : i));
    } else {
      // Tambah data baru
      setItems([...items, updatedItem]);
    }
    setShowModal(false);
    setCurrentItem(null);
  };

  // Fungsi untuk menghapus data (Delete)
  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus barang ini?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-grow-1 main-content">
        <Navbar onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="container-fluid mt-4">
          <InventoryTable 
            items={items} 
            onEdit={(item) => { setCurrentItem(item); setShowModal(true); }}
            onDelete={handleDelete}
            onAdd={() => { setCurrentItem(null); setShowModal(true); }}
          />
        </div>
      </div>
      {showModal && <InventoryModal item={currentItem} onSave={handleSave} onClose={() => setShowModal(false)} />}
    </div>
  );
}
export default App;