import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { GoPencil, GoTrash } from "react-icons/go";
import { Container } from 'react-bootstrap';
import SalaryModal from '../salary modal/SalaryModal';
import './InputSalary.css'

const InputSalary = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isDarkMode] = useState(false); // State untuk dark mode
    const totalItems = 100;

    // State untuk kontrol modal
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const handleSaveData = () => {
        console.log('Data telah disimpan');
        setShowModal(false);
    };

    const data = Array.from({ length: totalItems }, (_, i) => ({ id: i + 1 })).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Container className={isDarkMode ? 'dark-mode' : ''}>
            <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                <div className="title-add-gaji">
                    <h3>Daftar Gaji</h3>
                </div>
                <div className='add-salary'>
                    <button className="btn btn-dark add-salary-btn" onClick={handleShowModal}>Add Gaji</button>
                </div>
            </div>

            <MDBTable align="middle" className="mdb-table table-responsive">
                <MDBTableHead>
                    <tr className='name-table text-center'>
                        <th>No</th>
                        <th className="action-column">Jabatan</th>
                        <th>Tipe</th>
                        <th>Gaji Karyawan</th>
                        <th>Gaji Lembur</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Akhir</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data.map((_, index) => (
                        <tr key={index}>
                            <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                            <td>YAYUK RETNO WULAN</td>
                            <td>22111302</td>
                            <td>Direktur</td>
                            <td>Laki-Laki</td>
                            <td>Lamongan</td>
                            <td>Lamongan</td>
                            <td className='action-btn'>
                                <span style={{ marginRight: '10px' }} className={isDarkMode ? 'text-light' : 'text-dark'}>
                                    <GoPencil className='fs-4' />
                                </span>
                                <span style={{ marginRight: '10px' }} className={isDarkMode ? 'text-light' : 'text-dark'}>
                                    <GoTrash className='fs-4' />
                                </span>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <label className='rows-name'>Rows per page</label>
                    <select 
                        className="ms-2 custom-select" 
                        value={itemsPerPage} 
                        onChange={handleItemsPerPageChange}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div>
                    <span>
                        {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}`}
                    </span>
                    <button 
                        className="btn btn-link btn-sm" 
                        disabled={currentPage === 1} 
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <MDBIcon fas icon="chevron-left" />
                    </button>
                    {[...Array(Math.ceil(totalItems / itemsPerPage))].map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn btn-link btn-sm ${currentPage === index + 1 ? 'active' : ''}`} 
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        className="btn btn-link btn-sm" 
                        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)} 
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <MDBIcon fas icon="chevron-right" />
                    </button>
                </div>
            </div>

            <SalaryModal show={showModal} handleClose={handleCloseModal} handleSave={handleSaveData} />
        </Container>
    );
};

export default InputSalary;
