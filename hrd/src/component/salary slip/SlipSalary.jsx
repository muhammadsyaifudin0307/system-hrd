import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import './SalarySlip.css';
import SalaryModalSlip from '../modal slip gaji/SalaryModal';
const SlipSalary = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false); 
    const totalItems = 100;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const handleShowModal = () => setShowModal(true);  
    const handleCloseModal = () => setShowModal(false); 

    const data = Array.from({ length: totalItems }, (_, i) => ({ id: i + 1 })).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container">
            <div className="kel mb-2 mt-2">
                <Row className="mb-3 align-items-center justify-content-between">
                    <Col md={6} className="d-flex align-items-center">
                        <InputGroup className="me-3 w-50">
                            <InputGroup.Text className="input-icon">
                                <FiSearch />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Search Employee"
                                aria-label="Search"
                                className="form-control-salary"
                                style={{ fontFamily: "'Inter'" }}
                            />
                        </InputGroup>
                        <InputGroup className="w-50">
                            <FormControl
                                placeholder="Rentan Tanggal"
                                type="text"
                                id="startDate"
                                aria-label="Start Date"
                                className="date-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={4} className='d-flex justify-content-end align-item-center'>
                        <Button className='btn-print bg-dark border-0'>
                            Print
                        </Button>
                    </Col>
                </Row>
            </div>
            

            <MDBTable align="middle" className=" table-salary">
                <MDBTableHead>
                    <tr className='head-salary text-center'>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Periode Gaji</th>
                        <th>Gaji Perhari</th>
                        <th>Jumlah Hari Kerja</th>
                        <th>Lembur</th>
                        <th>Potongan</th>
                        <th>Bonus</th>
                        <th>Total</th>
                        <th>Tanggal</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data.map((_, index) => (
                        <tr key={index}>
                            <td style={{ fontFamily: "'Inter'" }}>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                            <td style={{ fontFamily: "'Inter'" }}>YAYUK RETNO WULAN</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>Direktur</td>
                            <td style={{ fontFamily: "'Inter'" }}>Laki-Laki</td>
                            <td style={{ fontFamily: "'Inter'" }}>Lamongan</td>
                            <td>
                                {/* Ketika tombol Action diklik, tampilkan modal */}
                                <HiOutlinePlusCircle className='btn-add-info fs-3' onClick={() => handleShowModal()} />
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <label style={{ fontFamily: "'Inter'" }} className='rows-name'>Rows per page</label>
                    <select
                        className="ms-2 custom-select"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option style={{ fontFamily: "'Inter'" }} value="10">10</option>
                        <option style={{ fontFamily: "'Inter'" }} value="20">20</option>
                        <option style={{ fontFamily: "'Inter'" }} value="50">50</option>
                    </select>
                </div>
                <div>
                    <span style={{ fontFamily: "'Inter'", fontSize: '14px' }}>
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

            <SalaryModalSlip show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default SlipSalary;
