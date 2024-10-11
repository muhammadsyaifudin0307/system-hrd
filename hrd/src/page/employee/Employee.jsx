
import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { GoPencil, GoTrash } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { GoFilter } from "react-icons/go";
import "./Employee.css";
import { BsInfoCircle } from "react-icons/bs";
import EmployeeForm from '../../component/form add employee/Form'; // Mengimpor EmployeeForm
import PopupDetail from '../../component/modal detail/PopupDetail';
const EmployeeTable = () => {
    const [showForm, setShowForm] = useState(false); // State untuk mengatur tampilan form
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
    const [itemsPerPage, setItemsPerPage] = useState(10); // State untuk jumlah item per halaman
    const totalItems = 100; // Total item (misalkan dari data API)
    const [showPopup, setShowPopup] = useState(false); // State untuk menampilkan popup detail
    const [employeeData, setEmployeeData] = useState({}); // State untuk menyimpan data karyawan

    const handleToggleForm = () => {
        setShowForm(true); // Membuka form
    };

    const resetFormState = () => {
        setShowForm(false); // Menyembunyikan form
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset ke halaman 1 setiap kali jumlah item per halaman diubah
    };

    // Menghitung data yang ditampilkan berdasarkan halaman aktif
    const data = Array.from({ length: totalItems }, (_, i) => ({ id: i + 1 })).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Fungsi untuk menampilkan detail karyawan
    const handleShowDetail = (employee) => {
        setEmployeeData(employee); // Menyimpan data karyawan untuk ditampilkan di popup
        setShowPopup(true); // Menampilkan popup
    };

    const closePopup = () => {
        setShowPopup(false); // Menutup popup
        setEmployeeData({}); // Mengosongkan data karyawan
    };

    // Data dummy karyawan untuk contoh
    const employee = {
        name: 'YAYUK RETNO WULAN',
        birthDate: '01-01-1990',
        age: '34',
        gender: 'Laki-Laki',
        nik: '22111302',
        phone: '08123456789',
        address: 'Lamongan',
        education: 'S1 Teknik Informatika',
        jobTitle: 'Direktur',
        jobDetails: 'Manajemen',
        contractStart: '01-01-2023',
        contractEnd: '01-01-2024',
        maritalStatus: 'Menikah',
        type: 'Kontrak',
        contractNumber: '1',
        bpjs: '123456789',
        workStart: '01-01-2020',
        workEnd: '01-01-2023',
        contractStatus: 'Aktif',
        contractDetails: 'Tidak ada keterangan',
        kodeBag: 'Tidak ada keterangan',
        kjp: 'Tidak ada keterangan',
    };

    return (
        <div className="container mt-5">
            <div className='title-employee' >
                <h1 className='text-employe d-inline-block border-bottom border-2 border-black pb-1' >Employee</h1>
            </div>

            <div className="input-group mb-2 search-input">
                <span className="input-group-text" id="basic-addon1">
                    <CiSearch className='fs-3 text-black' />
                </span>
                <input type="text" className="form-control-in" placeholder="Search Employee" aria-label="Search" aria-describedby="basic-addon1" style={{ fontFamily: "'Inter'" }} />
            </div>
            <div className="kel d-flex justify-content-between align-items-center mb-2 mt-2">
    <div className="d-flex justify-content-center align-items-center">
        <GoFilter className="fs-2 ms-3" />
        <select className="form-select category-line w-75 h-25 text-center ms-3">
            <option value="">Category</option>
            <option value="Manager">Manager</option>
            <option value="Engineer">Engineer</option>
            <option value="HR">HR</option>
        </select>
    </div>

    {/* Tombol untuk menampilkan form */}
    <div className="">
        <button className="btn btn-dark new-add" onClick={handleToggleForm}>Add New Employee</button>
    </div>
</div>

            <MDBTable align="middle" className="mdb-table table-responsive">
                <MDBTableHead>
                    <tr className='name-table text-center'>
                        <th>No</th>
                        <th className="action-column">Nama Karyawan</th>
                        <th>NIK</th>
                        <th>Jabatan</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data.map((_, index) => (
                        <tr key={index}>
                            <td style={{ fontFamily: "'Inter'" }}>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                            <td style={{ fontFamily: "'Inter'" }}>YAYUK RETNO WULAN</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>Direktur</td>
                            <td style={{ fontFamily: "'Inter'" }}>Laki-Laki</td>
                            <td style={{ fontFamily: "'Inter'" }}>Lamongan</td>
                            <td>
                                <span style={{ marginRight: '10px' }}>
                                    <GoPencil className='fs-4 icon-action' />
                                </span>
                                <span style={{ marginRight: '10px' }}>
                                    <GoTrash className='fs-4 icon-action' />
                                </span>
                                < BsInfoCircle className='fs-4 icon-action' onClick={() => handleShowDetail(employee)} style={{ cursor: 'pointer' }} />
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

            {/* Form dengan animasi slide-up, tambahkan kelas 'active' saat state showForm true */}
            <div className={showForm ? 'slide-up-form active' : 'slide-up-form'}>
                {showForm && <EmployeeForm resetFormState={resetFormState} />}
            </div>

            {/* Popup Detail Karyawan */}
            {showPopup && (
                <PopupDetail employeeData={employeeData} closePopup={closePopup} />
            )}
        </div>
    );
};

export default EmployeeTable;