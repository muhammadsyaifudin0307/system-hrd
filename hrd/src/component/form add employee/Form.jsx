import { useState, useEffect } from 'react';
import { BsBuildings } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import PropTypes from 'prop-types';
import './EmployeeForm.css';

const EmployeeForm = ({ resetFormState }) => {
    const [isActive, setIsActive] = useState(true);
    const [isHidden, setIsHidden] = useState(false);
    const [jenis, setJenis] = useState(''); // Menyimpan jenis yang dipilih
    const [jabatan, setJabatan] = useState('');
    const [status, setStatus] = useState(''); // Status kontrak atau tetap

    const handleJenisChange = (event) => {
        setJenis(event.target.value);
    };

    const handleJabatanChange = (event) => {
        setJabatan(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        setJabatan('');  // Reset jabatan ketika jenis berubah
    }, [jenis]);

    useEffect(() => {
        if (isHidden) {
            resetFormState();
        }
    }, [isHidden, resetFormState]);

    const handleBack = () => {
        setIsActive(false);  // Mulai animasi slide-down
        setTimeout(() => {
            setIsHidden(true);  // Sembunyikan form setelah animasi selesai
        }, 500);  // Durasi animasi sinkron dengan CSS
    };

    return (
        <div>
            {!isHidden && (
                <div className={`slide-up-form ${isActive ? 'active' : ''}`}>
                    <div className="employee-form-container mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <button className="btn btn-light back-button nama-back" onClick={handleBack} ><IoIosArrowRoundBack size={27} className='arrow-back' />Back</button>
                            <h2 className='judul-form'>Employee Form</h2>
                            <button className="btn btn-dark submit-button">Submit</button>
                        </div>
                            <hr className='garis-hr mb-5' />
                        <div className="row mt-1">
                            {/* Personal Data Section */}
                            <div className="col-md-6">
                                <div className="card p-3 backgorund-input">
                                    <div className="icon mt-2">
                                    <h4 className="section-title">Personal Data</h4>
                                    <CiUser className='fs-4'/>
                                    </div>
                                    <hr />
                                    <div className="row mb-1">
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="nik" className="form-label">NIK</label>
                                            <input type="text" className="form-control" id="nik" />
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select className="form-select" id="status">
                                                <option value="">Select Status</option>
                                                <option value="1">Menikah</option>
                                                <option value="2">Belum Menikah</option>
                                                <option value="3">K/1</option>
                                                <option value="4">K/2</option>
                                                <option value="5">K/3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="name" className="form-label">Nama</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="education" className="form-label">Pendidikan</label>
                                        <input type="text" className="form-control" id="education" />
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-md-6">
                                            <label htmlFor="birthdate" className="form-label">Tanggal Lahir</label>
                                            <input type="date" className="form-control" id="birthdate" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="gender" className="form-label">Jenis Kelamin</label>
                                            <select className="form-select" id="gender">
                                                <option value="laki-laki">Laki-laki</option>
                                                <option value="perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="phone" className="form-label">No Hp</label>
                                        <input type="text" className="form-control" id="phone" />
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-md-6">
                                            <label htmlFor="age" className="form-label">Usia</label>
                                            <input type="text" className="form-control" id="age" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="origin" className="form-label">Asal</label>
                                            <input type="text" className="form-control" id="origin" />
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="alamat" className="form-label">Alamat</label>
                                        <textarea className="label-alamat" id="alamat" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Employee Data Section */}
                            <div className="col-md-6 ">
                                <div className="card p-3 mb-1 backgorund-input">
                                    <div className="icon mt-2">
                                    <h4 className="section-title">Employee Data </h4>
                                    <BsBuildings className=' fs-4'/>
                                    </div>
                                    <hr />

                                    <div className="form-group mb-1">
                                    <label htmlFor="jenis" className="form-label  mb-1">Status</label>
                                        <select className="form-select  mb-1" id="jenis" onChange={handleJenisChange}>
                                            <option value="">Select Status</option>
                                            <option value="staff">Staff</option>
                                            <option value="non-staff">Non Staff</option>
                                    </select>       
                                      </div>
                                                
                                    
                                    {jenis && (
                                       <div className="form-group mb-1">
                                        <label htmlFor="jabatan" className="form-label  mb-1">Jabatan</label>
                                            <select className="form-select" id="jabatan" onChange={handleJabatanChange}>
                                                {jenis === 'staff' ? (
                                                    <>
                                                        <option value="hrd">HRD</option>
                                                        <option value="direktur">Direktur</option>
                                                        <option value="manager">Manager</option>
                                                        <option value="asisten_manager">Asisten Manager</option>
                                                        <option value="spv">SPV</option>
                                                    </>
                                                ) : (
                                                    <>
                                                        <option value="satpam">Satpam</option>
                                                        <option value="office_boy">Office Boy</option>
                                                        <option value="teknisi">Teknisi</option>
                                                        <option value="penerimaan">Penerimaan</option>
                                                        <option value="produksi">Produksi</option>
                                                        <option value="qc">QC</option>
                                                        <option value="gudang">Gudang</option>
                                                        <option value="packing">Packing</option>
                                                        <option value="dapur">Dapur</option>
                                                        <option value="limbah">Limbah</option>
                                                        <option value="tally">Tally</option>
                                                        <option value="fm">FM</option>
                                                        <option value="potong_kepala">Potong Kepala</option>
                                                    </>
                                                )}
                                            </select>
                                        </div>
                                      
                                    )}
                                    
                                    {jabatan === 'potong_kepala' && (
                                        <>
                                        <div className="row mb-1">
                                    <div className="col-md-6 mb-1">
                                    <label htmlFor="bagian" className="form-label">Bagian</label>
                                                <select className="form-select" id="bagian">
                                                    <option value="ketua">Ketua</option>
                                                    <option value="wakil_ketua">Wakil Ketua</option>
                                                    <option value="anggota">Anggota</option>
                                                </select>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                    <label htmlFor="kelompok" className="form-label  mb-1">Kelompok</label>
                                                <select className="form-select" id="kelompok">
                                                    {[...Array(10).keys()].map(i => (
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    ))}
                                                </select>
                                        </div>
                                    </div>
                                           
                                        </>
                                    )}
                                  
                                    <div className="form-group mb-1">
                                    <label htmlFor="status_karyawan" className="form-label">Status Karyawan</label>
                                        <select className="form-select" id="status_karyawan" onChange={handleStatusChange}>
                                            <option value="">Pilih Status</option>
                                            <option value="kontrak">Kontrak</option>
                                            <option value="tetap">Tetap</option>
                                        </select>
                                    </div>

                                    {/* Input Awal dan Akhir Kontrak */}
                                    {status === 'kontrak' && (
                                            <>
                                            <div className="row mb-1">
                                                    <div className="col-md-6 mb-1">
                                                    <label htmlFor="kontrakKe" className="form-label mb-1">Kontrak Ke</label>
                                                    <input type="text" className="form-control" id="kontrakKe" />
                                                    </div>
                                                    <div className="col-md-6 mb-1">
                                                    <label htmlFor="keteranganKontrak" className="form-label mb-1">Keterangan Kontrak</label>
                                                    <input type="text" className="form-control" id="keteranganKontrak" />
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="row mb-1">
                                                    <div className="col-md-6 mb-1">
                                                        <label htmlFor="awalKontrak" className="form-label mb-1">Awal Kontrak</label>
                                                        <input type="date" className="form-control" id="awalKontrak" />
                                                    </div>
                                                    <div className="col-md-6 mb-1">
                                                        <label htmlFor="akhirKontrak" className="form-label mb-1">Akhir Kontrak</label>
                                                        <input type="date" className="form-control" id="akhirKontrak" />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    <div className="row mb-1">
                                    <div className="col-md-6 mb-1">
                                        <label htmlFor="awal_kerja" className="form-label">Awal Kerja</label>
                                        <input type="date" className="form-control" id="awal_kerja" />
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label htmlFor="akhir_kerja" className="form-label">Akhir kerja</label>
                                        <input type="date" className="form-control" id="akhir_kerja" />
                                    </div>
                                </div>
                                <div className="row mb-1">
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="kode_bag" className="form-label  mb-1">Kode Bag</label>
                                            <input type="text" className="form-control  mb-1" id="kode_bag" />
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="status" className="form-label  mb-1">Status BPJS</label>
                                            <select className="form-select" id="status">
                                                <option value="">Select Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="nik_code" className="form-label">NIK Cd/Th/No</label>
                                            <input type="text" className="form-control" id="nik_code" />
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <label htmlFor="kpj" className="form-label">KPJ</label>
                                            <input type="text" className="form-control" id="kpj" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Validasi props
EmployeeForm.propTypes = {
    resetFormState: PropTypes.func.isRequired,
};

export default EmployeeForm;
