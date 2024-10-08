// Gajian.js
import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import AddGajian from './AddGajian';

const Gajian = () => {
    const [showForm, setShowForm] = useState(false);
    
    const handleToggleForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const resetFormState = () => {
        // Reset state form di sini, jika diperlukan
    };

    return (
        <div className="container mt-5">
            <div className='title-employee'>
                <h1 className='d-inline-block border-bottom border-2 border-black pb-1'>Tambah Gaji</h1>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 button-add">
                <Button variant="dark" onClick={handleToggleForm}>Add New Employee</Button>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jabatan</th>
                        <th>Tipe</th>
                        <th>Gaji Karyawan</th>
                        <th>Gaji Lembur</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Akhir</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Tambahkan data tabel di sini */}
                </tbody>
            </Table>

            {/* Modal untuk form */}
            <Modal show={showForm} onHide={handleCloseForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Gaji</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddGajian resetFormState={resetFormState} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseForm}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Gajian;
