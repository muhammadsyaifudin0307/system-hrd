import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import prop-types untuk validasi
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Button, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import './RekapAbsensi.css';

function RekapAbsensi() {
  const [setSearchTerm] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [animate, setAnimate] = useState(false); // State untuk animasi

  // Generate dates for the selected month and year
  const dates = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, index) => index + 1);

  // Efek ketika bulan berubah
  useEffect(() => {
    setAnimate(true); // Set animate ke true saat bulan berubah
    const timer = setTimeout(() => setAnimate(false), 300); // Durasi animasi
    return () => clearTimeout(timer);
  }, [month]);

  return (
    <div className="rekap-container">
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="d-flex align-items-center w-100 mb-4">
          <div className="d-flex search-container">
            <CiSearch className="search-icon" />
            <Form.Control
              type="text"
              placeholder="Search Employee"
              className="search-absensi"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Form.Select className="categ-e" onChange={(e) => console.log(e.target.value)}>
            <option>Select Category</option>
            <option>Satpam</option>
            <option>Manager</option>
          </Form.Select>
          <Form.Select className="tahun-c" onChange={(e) => setYear(e.target.value)}>
            <option>Tahun</option>
            {[2022, 2023, 2024].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </Form.Select>

          <Button className="button-pdf">Convert to PDF</Button>
        </div>
      </div>

      <div className="bulan-bt">
        {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((monthName, index) => (
          <Button
            variant={month === index ? "primary" : "outline-secondary"}
            className={`me-2 ${month === index ? 'active' : ''}`}
            key={index}
            onClick={() => setMonth(index)} // Pindah bulan
          >
            {monthName}
          </Button>
        ))}
      </div>

      <div className={`new-tab ${animate ? 'slide-up' : ''}`}>
        <h5 className="sa-tpam">Satpam</h5>
        <MDBTable align="middle" className="table-bordered">
          <MDBTableHead>
            <tr>
              <th>No</th>
              <th>Nama Karyawan</th>
              <th>Jabatan</th>
              <th>NIK</th>
              <th>Masuk</th>
              <th>Izin</th>
              <th>Absen</th>
              <th>Cuti</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {dates.map((date, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>AYUK RETNO WULAN</td>
                <td>Satpam</td>
                <td>23456789</td>
                <td>25</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

// Validasi prop menggunakan prop-types
RekapAbsensi.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      jabatan: PropTypes.string,
      nik: PropTypes.string,
    })
  ).isRequired, // employees harus berupa array of objects dan wajib diberikan
};

export default RekapAbsensi;
