import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css"; // Pastikan CSS datepicker diimport
import "./Absensi.css";

function Absensi({ employees, setEmployees }) {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false); // State untuk animasi

  useEffect(() => {
    setIsVisible(true); // Aktifkan animasi setelah komponen dimount
  }, []);

  const handleInputChange = (index, field) => {
    if (!isEditable) return;

    const newEmployees = employees.map((employee, i) =>
      i === index
        ? {
            ...employee,
            status: { masuk: false, izin: false, alpha: false, cuti: false, [field]: true },
          }
        : employee
    );
    setEmployees(newEmployees);
  };

  const handleSubmit = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <div className={`absensi-container ${isVisible ? "animate-fade-in" : ""}`}>
      <div className="controls d-flex justify-content-between align-items-center mt-2">
        <div className="col-md-6 d-flex align-items-center">
          <label htmlFor="gender" className="form-label"></label>
          <select className="form-select-gender me-2" id="gender">
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
          <div className="date-picker-wrapper position-relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="date-picker form-control-picker rounded-1"
              id="date-picker"
              popperPlacement="bottom-end"
            />
            <IoCalendarNumberOutline className="calendar-icon" />
          </div>
        </div>
        <div className="buttons d-flex justify-content-end align-items-center me-1">
          <Button className="text-black bg-white border-1 border-black w-auto h-100" onClick={handleEdit}>
            Edit
          </Button>
          <Button className="bg-black border-0 w-auto h-100" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      <MDBTable align="middle" className="table-absensi mt-4">
        <MDBTableHead>
          <tr>
            <th>No</th>
            <th>Nama Karyawan</th>
            <th>Masuk</th>
            <th>Izin</th>
            <th>Alpha</th>
            <th>Cuti</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>
                <input
                  type="radio"
                  name={`status-${index}`}
                  checked={employee.status.masuk}
                  onChange={() => handleInputChange(index, "masuk")}
                  disabled={!isEditable}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`status-${index}`}
                  checked={employee.status.izin}
                  onChange={() => handleInputChange(index, "izin")}
                  disabled={!isEditable}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`status-${index}`}
                  checked={employee.status.alpha}
                  onChange={() => handleInputChange(index, "alpha")}
                  disabled={!isEditable}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`status-${index}`}
                  checked={employee.status.cuti}
                  onChange={() => handleInputChange(index, "cuti")}
                  disabled={!isEditable}
                />
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

Absensi.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.shape({
        masuk: PropTypes.bool,
        izin: PropTypes.bool,
        alpha: PropTypes.bool,
        cuti: PropTypes.bool,
      }).isRequired,
    })
  ).isRequired,
  setEmployees: PropTypes.func.isRequired,
};

export default Absensi;
