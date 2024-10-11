import PropTypes from 'prop-types'; // Import prop-types
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const SalaryModal = ({ show, handleClose, handleSave }) => {
    const [jabatan, setJabatan] = useState('');
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    
    const handleJabatanChange = (event) => {
        setJabatan(event.target.value);
        setShowAdditionalInputs(event.target.value === 'Potong Kepala');
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered scrollable> 
            <Modal.Header>
                <Modal.Title>Tambah Data Gaji</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label>Jabatan</label>
                        <select className="form-select" id="jabatan" value={jabatan} onChange={handleJabatanChange}>
                            <option value="">Pilih Jabatan</option>
                            <option value="HRD">HRD</option>
                            <option value="Direktur">Direktur</option>
                            <option value="Manager">Manager</option>
                            <option value="Asisten Manager">Asisten Manager</option>
                            <option value="SPV">SPV</option>
                            <option value="Satpam">Satpam</option>
                            <option value="Office Boy">Office Boy</option>
                            <option value="Teknisi">Teknisi</option>
                            <option value="Penerimaan">Penerimaan</option>
                            <option value="Produksi">Produksi</option>
                            <option value="QC">QC</option>
                            <option value="Gudang">Gudang</option>
                            <option value="Packing">Packing</option>
                            <option value="Dapur">Dapur</option>
                            <option value="Limbah">Limbah</option>
                            <option value="Tally">Tally</option>
                            <option value="FM">FM</option>
                            <option value="Potong Kepala">Potong Kepala</option>
                        </select>
                    </div>
                    {showAdditionalInputs && (
                        <div className="additional-inputs">
                            <div className="form-group mt-2">
                                <label htmlFor="jabatanKetua">Jabatan (Ketua/Wakil Ketua/Anggota)</label>
                                <select className="form-select" id="jabatanKetua">
                                    <option value="">Pilih Jabatan</option>
                                    <option value="Ketua">Ketua</option>
                                    <option value="Wakil Ketua">Wakil Ketua</option>
                                    <option value="Anggota">Anggota</option>
                                </select>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="kelompok">Kelompok</label>
                                <select className="form-select" id="kelompok">
                                    <option value="">Pilih Kelompok</option>
                                    {[...Array(10).keys()].map(i => (
                                        <option key={i + 1} value={i + 1}>Kelompok {i + 1}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    <Row className="mt-2"> 
                        <Col>
                            <div className="form-group">
                                <label>Tanggal Mulai</label>
                                <input type="date" className="form-control" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label>Tanggal Akhir</label>
                                <input type="date" className="form-control" />
                            </div>
                        </Col>
                    </Row>
                    
                    <div className="form-group">
                        <label>Tipe</label>
                        <select className="form-select" id="tipe">
                            <option value="">Pilih Tipe</option>
                            <option value="harian">Harian</option>
                            <option value="mingguan">Mingguan</option>
                            <option value="bulanan">Bulanan</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Gaji Harian</label>
                        <input type="number" className="form-control" placeholder="Masukkan gaji" />
                    </div>
                    <div className="form-group">
                        <label>Gaji Lembur</label>
                        <input type="number" className="form-control" placeholder="Masukkan gaji lembur" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

SalaryModal.propTypes = {
    show: PropTypes.bool.isRequired,        
    handleClose: PropTypes.func.isRequired,  
    handleSave: PropTypes.func.isRequired,   
};

export default SalaryModal;
